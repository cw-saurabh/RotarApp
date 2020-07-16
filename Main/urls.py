from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.home, name = 'main-home'),
    path('login/', views.login, name = 'main-login'),
    path('zones/', views.zones, name = 'main-zones'),
    path('about/', views.about, name = 'main-about'),
    path('contact/', views.contact, name = 'main-contact'),
    
]
