from django.urls import path, include
from django.conf.urls import url, include
from . import views

urlpatterns = [
    path('report/', views.report, name = 'report'),    
    # path('view/', views.viewReport, name = 'viewReport')
    url(r'^report/list/(?P<username>\w+)/$', views.listreports, name='listreports'),
    url(r'^report/view/(?P<reportid>[\-0-9]+)/$', views.viewreports, name='viewreports'),
]
