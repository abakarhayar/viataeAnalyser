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
    document = fitz.open(pdf_path)
    text = ""
    for page_num in range(document.page_count):
        page = document.load_page(page_num)
        text += page.get_text()
    return text

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def ajouter_candidature(request):
    if request.user.role not in ['candidat', 'admin']:
        return Response({'detail': 'Vous n\'avez pas les droits nécessaires pour effectuer cette action.'}, status=status.HTTP_403_FORBIDDEN)

    serializer = CandidatureSerializer(data=request.data)
    if serializer.is_valid():
        serializer.validated_data['user'] = request.user
        candidature = serializer.save()

        # Analyse du CV et de la lettre de motivation
        cv_text = extract_text_from_pdf(candidature.cv_candidat.path)
        lettre_text = extract_text_from_pdf(candidature.lettre_motiv.path) if candidature.lettre_motiv else ""

        cv_keyword_score, cv_experience_score, cv_total_score = analyze_document(cv_text, candidature.titre_emploi, candidature.annee_experience)
        lettre_keyword_score, lettre_experience_score, lettre_total_score = analyze_document(lettre_text, candidature.titre_emploi, candidature.annee_experience)

        candidature.score_cv = cv_total_score
        candidature.score_motivation = lettre_total_score
        candidature.score_total = cv_total_score + lettre_total_score
        candidature.save()

        return Response(CandidatureSerializer(candidature).data, status=status.HTTP_201_CREATED)
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
