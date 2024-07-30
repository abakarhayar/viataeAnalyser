from django.shortcuts import render, redirect
from django.contrib.auth import login as auth_login, authenticate, logout as auth_logout
from .forms import FormulaireInscription, FormulaireConnexion
from django.contrib import messages

def accueil(request):
    return render(request, 'accueil.html')

def inscription(request):
    if request.method == 'POST':
        formulaire = FormulaireInscription(request.POST)
        if formulaire.is_valid():
            utilisateur = formulaire.save()
            utilisateur = authenticate(email=formulaire.cleaned_data.get('email'), password=formulaire.cleaned_data.get('password1'))
            if utilisateur:
                auth_login(request, utilisateur)
                return redirect('accueil')
            else:
                messages.error(request, "Erreur lors de l'authentification.")
    else:
        formulaire = FormulaireInscription()
    return render(request, 'inscription.html', {'formulaire': formulaire})

def connexion(request):
    if request.method == 'POST':
        formulaire = FormulaireConnexion(request, data=request.POST)
        if formulaire.is_valid():
            utilisateur = formulaire.get_user()
            auth_login(request, utilisateur)
            return redirect('accueil')
        else:
            messages.error(request, "Identifiants invalides.")
    else:
        formulaire = FormulaireConnexion()
    return render(request, 'connexion.html', {'formulaire': formulaire})

def deconnexion(request):
    auth_logout(request)
    return redirect('connexion')
