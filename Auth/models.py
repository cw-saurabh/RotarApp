from django.db import models
import uuid


# Create your models here.
from django.contrib.auth.models import AbstractUser
from django.db import models

class Account(AbstractUser):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    first_name = None
    last_name = None
    name = models.CharField(max_length=30,verbose_name = "Name", default="",blank=True)
    is_rotaractor = models.BooleanField('student status', default=False)
    is_club = models.BooleanField('teacher status', default=False)
    rotaryId = rotaryId = models.IntegerField(verbose_name = "Rotary Id",null=True,blank=True)

    REQUIRED_FIELDS = ['rotaryId','email']

    def __str__(self):
        return (self.username)

    class Meta:
        verbose_name = 'Account'
        verbose_name_plural = 'Accounts'

# class Club(models.Model):
#     account = models.OneToOneField(Account, on_delete=models.CASCADE, primary_key=True)
#     clubKey= models.CharField(max_length=32,verbose_name = "Name", default="",blank=True)
#     zone = models.IntegerField(verbose_name = "Zone")
#     clubCode = models.IntegerField(verbose_name = "Club Code")

# class Rotaractor(models.Model):
#     account = models.OneToOneField(Account, on_delete=models.CASCADE, primary_key=True)
#     pass