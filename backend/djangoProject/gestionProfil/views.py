from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.contrib.auth import login as auth_login, authenticate, logout as auth_logout
from .models import User, Candidature
from .serializers import UserSerializer, CandidatureSerializer
import logging
from rest_framework_simplejwt.tokens import RefreshToken
import random
import string


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

def anonymiser_utilisateur(request):
    user = request.user

    fake_nom = ''.join(random.choices(string.ascii_letters, k=10))
    fake_prenom = ''.join(random.choices(string.ascii_letters, k=10))
    fake_email = f"{fake_nom.lower()}.{fake_prenom.lower()}@fake.com"
    fake_telephone = ''.join(random.choices(string.digits, k=10))

    user.nom = fake_nom
    user.prenom = fake_prenom
    user.email = fake_email
    user.telephone = fake_telephone
    user.adresse_postale = ''
    user.description = 'Utilisateur anonymisé'
    user.save()

    serializer = UserSerializer(user)
    return Response(serializer.data, status=status.HTTP_200_OK)
