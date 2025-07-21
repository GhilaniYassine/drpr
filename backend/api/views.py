from django.shortcuts import render
from rest_framework import  viewsets , permissions
from .models import *
from  .serializers import *
from rest_framework.response import Response

class CountryViwesets(viewsets.ViewSet):
    permssions = [permissions.AllowAny]
    querysets = Country.objects.all()
    serializer = CountrySerializer
    def list (self,request):
        querysets = Country.objects.all()
        serializer = self.serializer_class(querysets,many=True)
        return Response(serializer.data)

        
