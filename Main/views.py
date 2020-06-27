from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def home(request):
    return render(request, 'Main/home.html',{'tab':'home'})

def login(request):
    return render(request, 'Main/login.html',{'tab':'login'})

def report(request):
    return render(request, 'Main/report.html',{'title':'Reporting','tab':'report'})

def about(request):
    return render(request, 'Main/about.html',{'title':'About Us','tab':'about'})

def contact(request):
    return render(request, 'Main/contact.html',{'title':'Contact Us','tab':'contact'})

def zones(request):
    return render(request, 'Main/zones.html',{'title':'Zones','tab':'zones'})