from django.db import models

# Create your models here.

class Candidature (models.Model):
    CandidatureId = models.AutoField(primary_key=True)
    UniversityName = models.CharField(max_length=500)
    UniversityYear = models.CharField(max_length=500)
    AcademicBackground = models.CharField(max_length=500)
    Relev1 = models.CharField(max_length=500)
    Relev2 = models.CharField(max_length=500)
    Status = models.CharField(max_length=500)
    Score = models.CharField(max_length=500)

