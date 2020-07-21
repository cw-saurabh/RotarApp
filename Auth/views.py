from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from .forms import ProfileUpdateForm
from .models import Club

# Create your views here.
def login(request):
    return render(request, 'Auth/login.html',{'tab':'login'})

@login_required
def profile(request):
    if request.method == 'POST' :
        u_form = ProfileUpdateForm(request.POST, 
                                    request.FILES, 
                                    instance= Club.objects.filter(account=request.user).first())
        
        u_form.save()
    else :
        u_form = ProfileUpdateForm(instance= Club.objects.filter(account=request.user).first())
    
    return render(request, 'Auth/updateProfile.html',{'tab':'profile','form':u_form})