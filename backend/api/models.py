from django.db import models



class Country(models.Model):
    name = models.CharField(unique=True,max_length=100) # the  name must be uinque and not more 100 character 
    created = models.DateTimeField(auto_now_add= True) # now in this field we will check the current date and will populte the field with it 
    modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class League(models.Model):
    name = models.CharField(unique=True,max_length=100) # the  name must be uinque and not more 100 character 
    created = models.DateTimeField(auto_now_add= True) # now in this field we will check the current date and will populte the field with it 
    modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
    

class Characteristc(models.Model):
    name = models.CharField(unique=True,max_length=100) 
    created = models.DateTimeField(auto_now_add= True) 
    modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class FootballClub(models.Model):
    name = models.CharField(unique=True,max_length=100) 
    description = models.CharField(max_length=1000)
    attendance = models.IntegerField(null=True) # null =True saying that okay if this one is empty
    city = models.CharField(max_length=100)
    # forgienkey 
    country = models.ForeignKey(Country , on_delete=models.CASCADE) 
    league = models.ForeignKey(League , on_delete=models.CASCADE) 
    characteristc = models.ManyToManyField(Characteristc)
    created = models.DateTimeField(auto_now_add= True) 
    modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name