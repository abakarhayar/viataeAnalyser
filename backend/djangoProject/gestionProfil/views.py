from django.shortcuts import render, redirect
from django.contrib.auth import login as auth_login, authenticate
from .forms import FormulaireInscription, FormulaireConnexion

def inscription(request):
    if request.method == 'POST':
        formulaire = FormulaireInscription(request.POST)
        if formulaire.is_valid():
            formulaire.save()
            utilisateur = authenticate(email=formulaire.cleaned_data.get('email'), password=formulaire.cleaned_data.get('password1'))
            if utilisateur:
                auth_login(request, utilisateur)
                return redirect('accueil')  # Redirigez vers une page d'accueil ou un autre endroit
    else:
        formulaire = FormulaireInscription()
    return render(request, 'inscription.html', {'formulaire': formulaire})

def connexion(request):
    if request.method == 'POST':
        formulaire = FormulaireConnexion(request, data=request.POST)
        if formulaire.is_valid():
            utilisateur = formulaire.get_user()
            auth_login(request, utilisateur)
            return redirect('accueil')  # Redirigez vers une page d'accueil ou un autre endroit
    else:
        formulaire = FormulaireConnexion()
    return render(request, 'connexion.html', {'formulaire': formulaire})
