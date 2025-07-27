from . models import *
from rest_framework import serializers

class CountrySerializer(serializers.ModelSerializer):
    class Meta :
        model = Country
        fields = ("id","name")

class LeagueSerializer(serializers.ModelSerializer):
    class Meta :
        model = League  # Fixed: was using Country model
        fields = ("id","name")
        
class CharacteristcSerializer(serializers.ModelSerializer):
    class Meta :
        model = Characteristc  # Fixed: was using Country model
        fields = ("id","name")
        
class FootballClubSerializer(serializers.ModelSerializer):
    class Meta :
        model = FootballClub
        fields = '__all__'




