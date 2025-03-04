# utils.py
import spacy
from collections import Counter

# Chargez le modèle spaCy
nlp = spacy.load("en_core_web_sm")

def analyze_document(text, job_description, experience_years):
    doc = nlp(text)
    words = [token.text.lower() for token in doc if token.is_alpha]
    
    # Utilisation de la description de l'emploi pour extraire les mots clés
    keywords = job_description.lower().split()

    keyword_counts = Counter(words)
    keyword_score = sum(keyword_counts[key] for key in keywords if key in keyword_counts)

    # Score basé sur l'expérience
    experience_score = min(experience_years / 10, 1)  # Supposez que 10 ans est l'expérience maximale pour un score de 1

    # Score total
    total_score = keyword_score + experience_score
    return keyword_score, experience_score, total_score
