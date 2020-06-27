from django.db import models

# Create your models here.

class Club(models.Model): 
    name = models.CharField(max_length=30,verbose_name = "Club Name")
    zone = models.IntegerField(verbose_name = "Zone")
    rotaryId = models.IntegerField(verbose_name = "Rotary Id")
    clubCode = models.IntegerField(verbose_name = "Club Code")
    logo = models.CharField(max_length=30,verbose_name = "Logo Filename",blank=True)
    email = models.EmailField(max_length=254,verbose_name = "Email Id",blank=True)
    password = models.CharField(max_length=10,verbose_name = "Password")

    def __str__(self): 
         return self.name