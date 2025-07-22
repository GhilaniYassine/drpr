from django.shortcuts import render
from rest_framework import viewsets, permissions
from .models import *
from .serializers import *
from rest_framework.response import Response    

class CountryViewsets(viewsets.ViewSet):
    permissions = [permissions.AllowAny]
    queryset = Country.objects.all()
    serializer_class = CountrySerializer
    
    def list(self, request):#
        queryset = Country.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)
class LeagueViewsets(viewsets.ViewSet):
    permissions = [permissions.AllowAny]
    queryset = League.objects.all()
    serializer_class = LeagueSerializer
    
    def list(self, request):#
        queryset = League.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)
class CharacteristcViewsets(viewsets.ViewSet):
    permisson = [permissions.AllowAny]
    queryset = Characteristc.objects.all()
    serializer_class = CharacteristcSerializer
    def list(self, request):#
        queryset = Characteristc.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)
class FootballClubViewsets(viewsets.ViewSet):
    permissions = [permissions.AllowAny]
    queryset = FootballClub.objects.all()
    serializer_class = FootballClubSerializer
    def list(self, request):#
        queryset = FootballClub.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)