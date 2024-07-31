# urls.py
from django.contrib import admin
from django.urls import path
from gestionProfil.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/inscription/', inscription, name='inscription'),
    path('api/connexion/', connexion, name='connexion'),
    path('api/deconnexion/', deconnexion, name='deconnexion'),
    path('api/profil/', profil, name='profil'),
    path('api/profil/modifier/', modifier_profil, name='modifier_profil'),
]
