from django.db import models
from Auth.models import Account
import uuid
from datetime import datetime

# # Create your models here.

class Report(models.Model):
    club            = models.ForeignKey(Account, on_delete = models.CASCADE)
    reportId        = models.CharField(max_length=30, verbose_name = "Report Id", primary_key = True)
    month           = models.CharField(max_length=10, verbose_name = "Month")
    date            = models.DateTimeField(verbose_name = "Reported on", default=datetime.now,null=True)
    memberMatrix00  = models.CharField(max_length=4,verbose_name = "Members at the beginning of the month - Male")
    memberMatrix01  = models.CharField(max_length=4,verbose_name = "Members at the beginning of the month - Female")
    memberMatrix02  = models.CharField(max_length=4,verbose_name = "Members at the beginning of the month - Others")
    memberMatrix10  = models.CharField(max_length=4,verbose_name = "Members added - Male")
    memberMatrix11  = models.CharField(max_length=4,verbose_name = "Members added - Female")
    memberMatrix12  = models.CharField(max_length=4,verbose_name = "Members added - Others")
    memberMatrix20  = models.CharField(max_length=4,verbose_name = "Members left - Male")
    memberMatrix21  = models.CharField(max_length=4,verbose_name = "Members left - Female")
    memberMatrix22  = models.CharField(max_length=4,verbose_name = "Members left - Others")
    memberMatrix30  = models.CharField(max_length=4,verbose_name = "Prospective - Male")
    memberMatrix31  = models.CharField(max_length=4,verbose_name = "Prospective - Female")
    memberMatrix32  = models.CharField(max_length=4,verbose_name = "Prospective - Others")
    memberMatrix40  = models.CharField(max_length=4,verbose_name = "Guests - Male")
    memberMatrix41  = models.CharField(max_length=4,verbose_name = "Guests - Female")
    memberMatrix42  = models.CharField(max_length=4,verbose_name = "Guests - Others")
    dues00          = models.CharField(max_length=6,verbose_name = "Dues paid upto last month",default="")
    dues04          = models.CharField(max_length=6,verbose_name = "District Dues paid in this month")
    bulletin00      = models.CharField(max_length=35,verbose_name = "Name of Bulletin")
    bulletin01      = models.CharField(max_length=10,verbose_name = "Type of Bulletin")
    bulletin02      = models.CharField(max_length=100,verbose_name = "Link")
    bulletin03      = models.DateTimeField(verbose_name = "Issued on", null=True)
    bulletin04      = models.DateTimeField(verbose_name = "Last Issued on", null=True)
    bulletin05      = models.CharField(max_length=15,verbose_name = "Frequency")
    feedback00      = models.BooleanField(verbose_name = "Feedback Q1")
    feedback01      = models.BooleanField(verbose_name = "Feedback Q2")
    feedback02      = models.BooleanField(verbose_name = "Feedback Q3")
    feedback03      = models.BooleanField(verbose_name = "Feedback Q4")
    suggestion00    = models.TextField(max_length=99,verbose_name = "Suggestions", default="")

    class Meta:
        verbose_name = 'Report'
        verbose_name_plural = 'Reports'
        get_latest_by = 'date'

    def __str__(self):
        return f'{self.club.name}-{self.month}'

class GBM(models.Model):
    club    = models.ForeignKey(Account, on_delete = models.CASCADE)
    reportId= models.ForeignKey(Report, on_delete = models.CASCADE)
    gbm0    = models.CharField(max_length=2,verbose_name = "Meeting Number")
    gbm1    = models.DateTimeField(verbose_name = "Date", default=datetime.now, null=True)
    gbm2    = models.CharField(max_length=700,verbose_name = "Agenda")
    gbm3    = models.BooleanField(verbose_name="Bylaws passed?")
    gbm4    = models.BooleanField(verbose_name="Budget passed?")
    gbm5    = models.CharField(max_length=4,verbose_name = "Attendance")

    class Meta:
        verbose_name = 'GBM'
        verbose_name_plural = 'GBMs'

    def __str__(self):
        return f'{self.club.name}-{self.reportId.month}-{self.gbm0}'

class BOD(models.Model):
    club    = models.ForeignKey(Account, on_delete = models.CASCADE)
    reportId= models.ForeignKey(Report, on_delete = models.CASCADE)
    bod0    = models.CharField(max_length=2,verbose_name = "Meeting Number")
    bod1    = models.DateTimeField(verbose_name = "Date", default=datetime.now, null=True)
    bod2    = models.CharField(max_length=700,verbose_name = "Agenda")
    bod3    = models.BooleanField(verbose_name="Bylaws passed?")
    bod4    = models.BooleanField(verbose_name="Budget passed?")
    bod5    = models.CharField(max_length=4,verbose_name = "Attendance")

    class Meta:
        verbose_name = 'BOD'
        verbose_name_plural = 'BODs'

    def __str__(self):
        return f'{self.club.name}-{self.reportId.month}-{self.bod0}'

class Event(models.Model):
    club        = models.ForeignKey(Account, on_delete = models.CASCADE)
    reportId    = models.ForeignKey(Report, on_delete = models.CASCADE)
    event0      = models.DateTimeField(verbose_name = "Date", default=datetime.now, null=True)
    event1      = models.CharField(max_length=35,verbose_name = "Name")
    event2      = models.CharField(max_length=3,verbose_name = "Avenue")
    event3      = models.CharField(max_length=5,verbose_name = "Attendance")
    event4      = models.CharField(max_length=5,verbose_name = "Volunteer Hours")
    event5      = models.CharField(max_length=7,verbose_name = "Funds Raised")
    event6      = models.CharField(max_length=700,verbose_name = "Description")
    event7      = models.CharField(max_length=100,verbose_name = "Instagram Link")

    class Meta:
        verbose_name = 'Event'
        verbose_name_plural = 'Events'

    def __str__(self):
        return f'{self.club.name}-{self.event1}'

class FutureEvent(models.Model):
    club            = models.ForeignKey(Account, on_delete = models.CASCADE)
    reportId        = models.ForeignKey(Report, on_delete = models.CASCADE)
    futureEvent0     = models.DateTimeField(verbose_name = "Date", default=datetime.now, null=True)
    futureEvent1     = models.CharField(max_length=35,verbose_name = "Name")
    futureEvent2     = models.CharField(max_length=700,verbose_name = "Description")
    futureEvent3     = models.CharField(max_length=3,verbose_name = "Avenue")

    class Meta:
        verbose_name = 'Future Event'
        verbose_name_plural = 'Future Events'

    def __str__(self):
        return f'{self.club.name}-{self.futureEvent2}'
