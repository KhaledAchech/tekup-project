from rest_framework import serializers
from api.models import Candidature

class CandidatureSerializer(serializers.ModelSerializer):
    class Meta:
        model=Candidature
        fields=('CandidatureId','UniversityName','UniversityYear',
        'AcademicBackground','Relev1','Relev2',
        'Status','Score')