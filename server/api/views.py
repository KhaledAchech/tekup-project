from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from api.models import Candidature
from api.serializers import CandidatureSerializer

# Create your views here.

@csrf_exempt
def candidatureApi(request,id=0):
    if request.method=='GET':
        candidature= Candidature.objects.all()
        candidature_serializer=CandidatureSerializer(candidature,many=True)
        return JsonResponse(candidature_serializer.data,safe=False)
    elif request.method=='POST':
        candidature_data=JSONParser().parse(request)
        candidature_serializer=CandidatureSerializer(data=candidature_data)
        if candidature_serializer.is_valid():
            candidature_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=='PUT':
        candidature_data=JSONParser().parse(request)
        candidature=Candidature.objects.get(CandidatureId=candidature_data['CandidatureId'])
        candidature_serializer=CandidatureSerializer(candidature,data=candidature_data)
        if candidature_serializer.is_valid():
            candidature_serializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=='DELETE':
        candidature=Candidature.objects.get(CandidatureId=id)
        candidature.delete()
        return JsonResponse("Deleted Successfully",safe=False)