from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from .forms import ProfileUpdateForm, EmailUpdateForm
from .models import Club
from django.shortcuts import redirect

# Create your views here.
@login_required
def profile(request):
    if request.method == 'POST' :
        p_form = ProfileUpdateForm(request.POST, 
                                    request.FILES, 
                                    instance= Club.objects.filter(account=request.user).first())
        e_form = EmailUpdateForm(request.POST, instance=request.user)
        if e_form.is_valid():
            e_form.save()
        if p_form.is_valid():
            p_form.save()
        return redirect('profile')
    else :
        p_form = ProfileUpdateForm(instance= Club.objects.filter(account=request.user).first())
        e_form = EmailUpdateForm(instance=request.user)

    return render(request, 'Auth/updateProfile.html',{'tab':'profile','pform':p_form,'eform':e_form,'profile':request.user.club})