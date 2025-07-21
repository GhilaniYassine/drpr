from . models import *
from rest_framework import serializers

class CountrySerializer(serializers.ModelSerializer):
    class Meta :
        model =Country
        fields = ("id","name")

class LeagueSerializer(serializers.ModelSerializer):
    class Meta :
        model =Country
        fields = ("id","name")
        
class CharacteristcSerializer(serializers.ModelSerializer):
    class Meta :
        model =Country
        fields = ("id","name")
        
class FootballClubSerializer(serializers.ModelSerializer):
    class Meta :
        model =Country
        fields = '__all__'



        
