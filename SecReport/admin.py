from django.contrib import admin
from .models import Report, GBM, BOD, Event, FutureEvent

# Register your models here.
admin.site.register(Report)
admin.site.register(GBM)
admin.site.register(BOD)
admin.site.register(Event)
admin.site.register(FutureEvent)