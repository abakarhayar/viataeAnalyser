from django.contrib import admin
from django.urls import path, include
from gestionProfil.views import accueil, inscription, connexion, deconnexion

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accueil/', accueil, name='accueil'),
    path('inscription/', inscription, name='inscription'),
    path('connexion/', connexion, name='connexion'),
    path('deconnexion/', deconnexion, name='deconnexion'),
]
