from django.urls import path, include
from . import views
from Auth.forms import LoginForm, PasswordChange, ProfileUpdateForm
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('login/', auth_views.LoginView.as_view(template_name='Auth/login.html',authentication_form=LoginForm, extra_context=({'title':'Login','tab':'login'})), name = 'login'),
    path('passwordChange/', auth_views.PasswordChangeView.as_view(template_name='Auth/passwordChange.html',form_class=PasswordChange, extra_context=({'title':'Change Password','tab':'profile'})), name = 'passwordChange'),
    path('passwordChangeDone/', auth_views.PasswordChangeDoneView.as_view(template_name='Auth/passwordChangeDone.html',extra_context=({'title':'Password Changed !','tab':'profile'})), name = 'password_change_done'),
    path('logout/', auth_views.LogoutView.as_view(extra_context=({'title':'Logout','tab':'logout'})), name = 'logout'),
    path('profile/', views.profile, name = 'profile'),
]
