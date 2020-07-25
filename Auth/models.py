from django.db import models
import uuid


# Create your models here.
from django.contrib.auth.models import AbstractUser
from django.db import models

class Account(AbstractUser):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    first_name = None
    last_name = None
    name = models.CharField(max_length=50,verbose_name = "Name", default="",blank=True)
    is_rotaractor = models.BooleanField('Rotaractor', default=False)
    is_club = models.BooleanField('Club status', default=False)
    rotaryId = rotaryId = models.IntegerField(verbose_name = "Rotary Id",null=True,blank=True)

    REQUIRED_FIELDS = ['rotaryId','email']

    def __str__(self):
        return (self.username)

    class Meta:
        verbose_name = 'Account'
        verbose_name_plural = 'Accounts'

class Club(models.Model):
    account = models.OneToOneField(Account, on_delete=models.CASCADE, primary_key=True)
    clubKey= models .UUIDField(verbose_name="Club Key", default=uuid.uuid4, editable=False)
    zone = models.IntegerField(verbose_name = "Zone")
    clubCode = models.IntegerField(verbose_name = "Club Code", blank=True, null=True)
    logo = models.ImageField(verbose_name="Logo", upload_to="logos", default="logos/district_logo.png")
    date  = models.DateTimeField(verbose_name = "Charter Date", null=True, blank=True, default=None)
    meetingPlace = models.CharField(max_length=100,verbose_name = "Meeting Place", null=True, blank=True, default=None)
    
    def __str__(self):
        return f'{self.account.name}'

    class Meta:
        verbose_name = 'Club Profile'
        verbose_name_plural = 'Club Profiles'

# class Rotaractor(models.Model):
#     account = models.OneToOneField(Account, on_delete=models.CASCADE, primary_key=True)
#     pass