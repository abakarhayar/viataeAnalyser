from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.contrib.auth import login as auth_login, authenticate, logout as auth_logout
from .models import User, Candidature
from .serializers import UserSerializer, CandidatureSerializer
import logging
from rest_framework_simplejwt.tokens import RefreshToken
from .utils import analyze_document
import fitz  # PyMuPDF

logger = logging.getLogger(__name__)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def list_users(request):
    if request.user.role != 'admin':
        return Response({'detail': 'Vous n\'avez pas les droits nécessaires pour effectuer cette action.'}, status=status.HTTP_403_FORBIDDEN)
    
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def filtrer_users_anonyms(request):
    # Vérifiez si l'utilisateur a le rôle 'admin'
    if request.user.role != 'admin':
        return Response({'detail': 'Vous n\'avez pas les droits nécessaires pour effectuer cette action.'}, status=status.HTTP_403_FORBIDDEN)
    
    # Filtrer les utilisateurs avec la description "Utilisateur anonymisé"
    users = User.objects.filter(description="Utilisateur anonymisé")
    
    # Sérialiser les utilisateurs
    serializer = UserSerializer(users, many=True)
    
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['POST'])
def inscription(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        auth_login(request, user)
        return Response({'message': 'Inscription réussie', 'user': UserSerializer(user).data}, status=status.HTTP_201_CREATED)
    else:
        logger.error(f"Errors: {serializer.errors}") 
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def connexion(request):
    email = request.data.get('email')
    password = request.data.get('password')
    user = authenticate(email=email, password=password)
    if user:
        auth_login(request, user)
        refresh = RefreshToken.for_user(user)
        return Response({
            'message': 'Connexion réussie',
            'user': UserSerializer(user).data,
            'access': str(refresh.access_token),
            'refresh': str(refresh),
        }, status=status.HTTP_200_OK)
    return Response({'message': 'Identifiants invalides'}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def deconnexion(request):
    auth_logout(request)
    return Response({'message': 'Déconnexion réussie'}, status=status.HTTP_200_OK)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def profil(request):
    user = request.user
    serializer = UserSerializer(user)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['PUT', 'PATCH'])
@permission_classes([IsAuthenticated])
def modifier_profil(request):
    user = request.user
    partial = request.method == 'PATCH'
    serializer = UserSerializer(user, data=request.data, partial=partial)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    else:
        logger.error(f"Errors: {serializer.errors}") 
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

def extract_text_from_pdf(pdf_path):
    try:
        document = fitz.open(pdf_path)
        text = ""
        for page_num in range(len(document)):
            page = document.load_page(page_num)
            text += page.get_text()
        return text
    except FileNotFoundError:
        return ""  # Retourner une chaîne vide ou gérer l'erreur comme vous le souhaitez
    except Exception as e:
        # Vous pouvez également logguer l'erreur ici
        print(f"Erreur lors de l'extraction du texte : {e}")
        return ""

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def ajouter_candidature(request):
    if request.user.role not in ['candidat', 'admin']:
        return Response({'detail': 'Vous n\'avez pas les droits nécessaires pour effectuer cette action.'}, status=status.HTTP_403_FORBIDDEN)

    data = request.data.copy()  # On fait une copie des données de la requête
    data['user'] = request.user.id  # On ajoute l'ID de l'utilisateur aux données

    serializer = CandidatureSerializer(data=data)
    if serializer.is_valid():
        serializer.save(user=request.user)  # On sauvegarde avec l'utilisateur authentifié
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    # Log errors for debugging
    print(serializer.errors)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def afficher_candidature(request):
    if request.user.role == 'candidat':
        candidatures = Candidature.objects.filter(user=request.user)
    elif request.user.role in ['rh', 'admin']:
        candidatures = Candidature.objects.all()
    else:
        return Response({'detail': 'Vous n\'avez pas les droits nécessaires pour effectuer cette action.'}, status=status.HTTP_403_FORBIDDEN)
    
    serializer = CandidatureSerializer(candidatures, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def analyse_candidature(request):
    # Vérifiez si l'utilisateur a le rôle requis
    if request.user.role != 'rh' and request.user.role != 'admin':
        return Response({'detail': 'Vous n\'avez pas les droits nécessaires pour effectuer cette action.'}, status=status.HTTP_403_FORBIDDEN)
    
    # Récupérez les données de la requête
    description_emploi = request.data.get('description_emploi')
    ville = request.data.get('ville')  # Vous pouvez supprimer cet argument si vous ne l'utilisez pas

    # Assurez-vous que la description de l'emploi est fournie
    if not description_emploi:
        return Response({'detail': 'La description de l\'emploi est requise.'}, status=status.HTTP_400_BAD_REQUEST)

    # Obtenez toutes les candidatures
    candidatures = Candidature.objects.all()  # Vous pouvez ajouter un filtre pour la ville si nécessaire

    # Calculer les scores pour chaque candidature
    for candidature in candidatures:
        # Extraire le texte du CV et de la lettre de motivation
        cv_text = extract_text_from_pdf(candidature.cv_candidat.path)
        lettre_text = extract_text_from_pdf(candidature.lettre_motiv.path) if candidature.lettre_motiv else ""

        # Analyser les documents
        cv_keyword_score, cv_experience_score, cv_total_score = analyze_document(cv_text, description_emploi, candidature.annee_experience)
        lettre_keyword_score, lettre_experience_score, lettre_total_score = analyze_document(lettre_text, description_emploi, candidature.annee_experience)

        # Mettre à jour les scores de la candidature
        candidature.score_cv = cv_total_score
        candidature.score_motivation = lettre_total_score
        candidature.score_total = cv_total_score + lettre_total_score
        candidature.save()

    # Trier les candidatures par score total en ordre décroissant
    candidatures_tries = Candidature.objects.all().order_by('-score_total')

    # Sérialiser les candidatures triées
    serializer = CandidatureSerializer(candidatures_tries, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def statistiques(request):
    if request.user.role != 'admin':
        return Response({'detail': 'Vous n\'avez pas les droits nécessaires pour effectuer cette action.'}, status=status.HTTP_403_FORBIDDEN)
    
    nombre_cv = Candidature.objects.exclude(cv_candidat='cv_pdfs/default.pdf').count()
    nombre_lettres_motiv = Candidature.objects.exclude(lettre_motiv=None).count()
    nombre_utilisateurs = User.objects.count()
    nombre_users_anonyms = User.objects.filter(description="Utilisateur anonymisé").count()
    
    statistiques = {
        'nombre_cv': nombre_cv,
        'nombre_lettres_motiv': nombre_lettres_motiv,
        'nombre_utilisateurs': nombre_utilisateurs,
        'nombre_users_anonyms': nombre_users_anonyms,
    }
    
    return Response(statistiques, status=status.HTTP_200_OK)