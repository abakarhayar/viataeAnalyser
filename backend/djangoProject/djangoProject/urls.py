from django.contrib import admin
from django.urls import path, include
from gestionProfil.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accueil/', accueil, name='accueil'),
    path('inscription/', inscription, name='inscription'),
    path('connexion/', connexion, name='connexion'),
]
