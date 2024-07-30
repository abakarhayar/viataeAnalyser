from django import forms
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from .models import User

class FormulaireInscription(UserCreationForm):
    class Meta:
        model = User
        fields = ['nom', 'prenom', 'email', 'password1', 'password2', 'telephone', 'role']
        labels = {
            'nom': 'Nom',
            'prenom': 'Prénom',
            'email': 'Email',
            'password1': 'Mot de passe',
            'password2': 'Confirmer le mot de passe',
            'telephone': 'Téléphone',
            'role': 'Rôle',
        }
        help_texts = {
            'password1': 'Entrez un mot de passe',
            'password2': 'Confirmez le mot de passe',
        }

class FormulaireConnexion(AuthenticationForm):
    class Meta:
        model = User
        fields = ['email', 'password']
        labels = {
            'email': 'Email',
            'password': 'Mot de passe',
        }
