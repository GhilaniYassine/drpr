
from django.contrib import admin
from django.urls import path
from .views import *
from rest_framework.routers import DefaultRouter
router= DefaultRouter()
router.register('country',CountryViewsets,basename='country')
router.register('league',LeagueViewsets,basename='league')
router.register('characteristic',CharacteristcViewsets,basename='characteristic')
router.register('footballclub',FootballClubViewsets,basename='footballclub')


urlpatterns=router.urls
