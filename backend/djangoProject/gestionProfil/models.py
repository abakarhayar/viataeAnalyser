from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin


class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('L\'email est requis')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(email, password, **extra_fields)

class User(AbstractBaseUser, PermissionsMixin):
    ROLE_CHOICES = [
        ('admin', 'Admin'),
        ('rh', 'RH'),
        ('candidat', 'Candidat'),
    ]

    nom = models.CharField(max_length=30)
    prenom = models.CharField(max_length=30)
    email = models.EmailField(unique=True)
    telephone = models.CharField(max_length=15, blank=True, null=True)
    adresse_postale = models.CharField(max_length=255, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    date_de_naissance = models.DateField(blank=True, null=True)
    role = models.CharField(max_length=10, choices=ROLE_CHOICES, default='candidat')
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)  

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['nom', 'prenom']

    def __str__(self):
        return self.email

class Candidature(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    titre_emploi = models.CharField(max_length=255)
    annee_experience = models.IntegerField()
    cv_candidat = models.FileField(upload_to='cv_pdfs/', default='cv_pdfs/default.pdf')
    lettre_motiv = models.FileField(upload_to='motivation_pdfs/', blank=True, null=True)
    score_cv = models.FloatField(default=0.0)
    score_motivation = models.FloatField(default=0.0)
    score_cv_rh = models.FloatField(default=0.0)
    score_motivation_rh = models.FloatField(default=0.0)
    score_total = models.FloatField(default=0.0)  # Nouveau champ pour le score total
    observation = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"Candidature for {self.titre_emploi} by {self.user.email}"
