from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.contrib.auth import login as auth_login, authenticate, logout as auth_logout
from .models import User
from .serializers import UserSerializer
import logging

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
        return Response({'message': 'Connexion réussie', 'user': UserSerializer(user).data}, status=status.HTTP_200_OK)
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
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
