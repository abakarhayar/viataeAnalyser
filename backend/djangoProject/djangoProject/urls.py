# urls.py
from django.contrib import admin
from django.urls import path
from gestionProfil.views import *
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/inscription/', inscription, name='inscription'),
    path('api/connexion/', connexion, name='connexion'),
    path('api/deconnexion/', deconnexion, name='deconnexion'),
    path('api/profil/', profil, name='profil'),
    path('api/profil/modifier/', modifier_profil, name='modifier_profil'),
    # path('api/analyse_candidature/', analyse_candidature, name='analyse_candidature'),
    path('api/users/', list_users, name='list_users'),
    path('api/filtrer_users_anonyms/', filtrer_users_anonyms, name='filtrer_users_anonyms'),
    path('api/statistiques/', statistiques, name='statistiques'),
    path('api/ajouter_candidature/', ajouter_candidature, name='ajouter_candidature'),
    path('api/afficher_candidature/', afficher_candidature, name='afficher_candidature'),
    path('api/anonymiser/', anonymiser_utilisateur, name='anonymiser_utilisateur'),


]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)