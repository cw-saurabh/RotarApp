from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import Group

from .forms import AccountCreationForm, AccountChangeForm
from .models import Account, Club

class AccountAdmin(UserAdmin):
    verbose_name_plural = "Accounts"
    add_form = AccountCreationForm
    form = AccountChangeForm
    model = Account
    list_display = ['username','name','rotaryId']
    exclude = ('first_name','last_name')
    fieldsets = (
        ('Personal info', {'fields': ('username','name', 'email', 'password','rotaryId','is_club','is_rotaractor')}),
        # ('Important dates', {'fields': ('last_login', 'date_joined')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'user_permissions')}),
    )

admin.site.register(Account, AccountAdmin)
admin.site.register(Club)
admin.site.unregister(Group)