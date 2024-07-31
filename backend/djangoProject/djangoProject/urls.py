# urls.py
from django.contrib import admin
from django.urls import path
from gestionProfil.views import inscription, connexion, deconnexion

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/inscription/', inscription, name='inscription'),
    path('api/connexion/', connexion, name='connexion'),
    path('api/deconnexion/', deconnexion, name='deconnexion'),
]
