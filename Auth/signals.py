from django.db.models.signals import post_save
from .models import Account, Club
from django.dispatch import receiver

@receiver(post_save, sender=Account)
def createProfile(sender, instance, created, **kwargs) :
    if created :
        Club.objects.create(account=instance)

@receiver(post_save, sender=Account)
def saveProfile(sender, instance, **kwargs) :
    instance.club.save()


