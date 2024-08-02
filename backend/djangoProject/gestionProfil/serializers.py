from rest_framework import serializers
from .models import User, Candidature

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'nom', 'prenom', 'email', 'telephone', 'adresse_postale', 'description', 'date_de_naissance', 'role', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

    def update(self, instance, validated_data):
        for attr, value in validated_data.items():
            if attr == 'password':
                instance.set_password(value)
            else:
                setattr(instance, attr, value)
        instance.save()
        return instance

class CandidatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Candidature
        fields = ['id', 'titre_emploi', 'annee_experience', 'cv_candidat', 'lettre_motiv', 'score_cv', 'score_motivation', 'observation']
        read_only_fields = ['user']

    def create(self, validated_data):
        return Candidature.objects.create(**validated_data)

    def update(self, instance, validated_data):
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance
    
class CandidatureSerializerAnalyse(serializers.ModelSerializer):
    class Meta:
        model = Candidature
        fields = [
            'user', 'titre_emploi', 'annee_experience', 'cv_candidat', 
            'lettre_motiv', 'score_cv_rh', 'score_motivation_rh', 
            'score_total', 'observation'
        ]    