from django.urls import path, include
from django.conf.urls import url, include
from . import views

urlpatterns = [
    path('report/', views.report, name = 'report'),    
    url(r'^report/list/(?P<username>\w+)/$', views.listReports, name='listReports'),
    url(r'^report/view/(?P<reportid>[\-0-9]+)/$', views.viewReports, name='viewReports'),
    url(r'^report/export/(?P<reportid>[\-0-9]+)/$', views.exportReport, name='exportReport'),
]
