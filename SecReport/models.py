from django.db import models
from Auth.models import Account
import uuid
from datetime import datetime  

# # Create your models here.

class Report(models.Model):
    club            = models.ForeignKey(Account, on_delete = models.CASCADE)
    reportId        = models.CharField(max_length=30, verbose_name = "Report Id", primary_key = True)
    month           = models.DateTimeField(verbose_name = "Month")
    date            = models.DateTimeField(verbose_name = "Reported on", default=datetime.now)
    memberMatrix00  = models.CharField(max_length=3,verbose_name = "Members at the beginning of the month - Male")
    memberMatrix01  = models.CharField(max_length=3,verbose_name = "Members at the beginning of the month - Female")
    memberMatrix02  = models.CharField(max_length=3,verbose_name = "Members at the beginning of the month - Others")
    memberMatrix10  = models.CharField(max_length=3,verbose_name = "Members added - Male")
    memberMatrix11  = models.CharField(max_length=3,verbose_name = "Members added - Female")
    memberMatrix12  = models.CharField(max_length=3,verbose_name = "Members added - Others")
    memberMatrix20  = models.CharField(max_length=3,verbose_name = "Members left - Male")
    memberMatrix21  = models.CharField(max_length=3,verbose_name = "Members left - Female")
    memberMatrix22  = models.CharField(max_length=3,verbose_name = "Members left - Others")
    memberMatrix30  = models.CharField(max_length=3,verbose_name = "Prospective - Male")
    memberMatrix31  = models.CharField(max_length=3,verbose_name = "Prospective - Female")
    memberMatrix32  = models.CharField(max_length=3,verbose_name = "Prospective - Others")
    memberMatrix40  = models.CharField(max_length=3,verbose_name = "Guests - Male")
    memberMatrix41  = models.CharField(max_length=3,verbose_name = "Guests - Female")
    memberMatrix42  = models.CharField(max_length=3,verbose_name = "Guests - Others")
    dues00          = models.CharField(max_length=10,verbose_name = "Dues paid upto last month")
    dues01          = models.CharField(max_length=10,verbose_name = "Payment for new members")
    dues02          = models.CharField(max_length=10,verbose_name = "New members inducted this month")
    dues03          = models.CharField(max_length=10,verbose_name = "Total District Dues paid")
    bulletin00      = models.CharField(max_length=10,verbose_name = "Name of Bulletin")
    bulletin01      = models.CharField(max_length=10,verbose_name = "Type of Bulletin")
    bulletin02      = models.CharField(max_length=10,verbose_name = "Link")
    bulletin03      = models.CharField(max_length=10,verbose_name = "Issued on")
    bulletin04      = models.CharField(max_length=10,verbose_name = "Last Issued on")
    bulletin05      = models.CharField(max_length=10,verbose_name = "Frequency")
    feedback00      = models.CharField(max_length=10,verbose_name = "Feedback Q1")
    feedback01      = models.CharField(max_length=10,verbose_name = "Feedback Q2")
    feedback02      = models.CharField(max_length=10,verbose_name = "Feedback Q3")
    feedback03      = models.CharField(max_length=10,verbose_name = "Feedback Q4")
    suggestion00    = models.TextField(max_length=99,verbose_name = "Suggestions")


# member1-0: 2020-07-02
# member1-1: Dummy
# type: Prospective Member
# gender: Female
# Blood Grouup: A +
# member1-5: Dummy
# member1-6: 2020-07-09
# memberMatrix00: Dummy
# memberMatrix01: Dummy
# memberMatrix02: Dummy
# memberMatrix03: 0
# memberMatrix10: Dummy
# memberMatrix11: Dummy
# memberMatrix12: Dummy
# memberMatrix13: 0
# memberMatrix20: Dummy
# memberMatrix21: D1ummy
# memberMatrix22: Dummy
# memberMatrix23: NaN
# memberMatrix30: Dummy
# memberMatrix31: Dummy
# memberMatrix32: Dummy
# memberMatrix33: 0
# memberMatrix40: Dummy
# memberMatrix41: Dummy
# memberMatrix42: Dummy
# memberMatrix43: 0
# memberMatrix50: 0
# memberMatrix51: NaN
# memberMatrix52: 0
# memberMatrix53: NaN
# gbm1-0: Dummy
# gbm1-1: 2020-07-04
# gbm1-2: Dummy
# type: No
# type: No
# gbm1-5: Dummy
# bod1-0: Dummy
# bod1-1: 2020-07-05
# bod1-2: Dummy
# type: No
# type: No
# bod1-5: Dummy
# dues00: Dummy
# dues01: Dummy
# dues02: Dummy
# dues03: Dummy
# event1-0: 2020-07-04
# event1-1: Dummy
# avenue: Club Service Director
# event1-3: Dummy
# event1-4: Dummy
# event1-5: Dummy
# event1-6: Dummy
# event1-7: Dummy
# event2-0: 
# event2-1: 
# avenue: 
# event2-3: 
# event2-4: 
# event2-5: Rs. 
# event2-6: 
# event2-7: 
# bulletin00: Dummy
# bulletin01: Dummy
# bulletin02: Dummy
# bulletin03: Dummy
# bulletin04: Dummy
# bulletin05: Dummy
# futureEvent1-0: 2020-07-02
# futureEvent1-1: Dummy
# avenue: Club Service Director
# feedback00: No
# feedback01: No
# feedback02: No
# feedback03: No
# suggestion00: Na na nana