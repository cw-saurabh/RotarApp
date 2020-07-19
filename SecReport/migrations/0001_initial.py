# Generated by Django 2.2.13 on 2020-07-19 02:56

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Report',
            fields=[
                ('reportId', models.CharField(max_length=10, primary_key=True, serialize=False, verbose_name='Report Id')),
                ('month', models.CharField(max_length=10, verbose_name='Month')),
                ('date', models.DateTimeField(default=datetime.datetime.now, verbose_name='Reported on')),
                ('memberMatrix00', models.CharField(max_length=3, verbose_name='Members at the beginning of the month - Male')),
                ('memberMatrix01', models.CharField(max_length=3, verbose_name='Members at the beginning of the month - Female')),
                ('memberMatrix02', models.CharField(max_length=3, verbose_name='Members at the beginning of the month - Others')),
                ('memberMatrix10', models.CharField(max_length=3, verbose_name='Members added - Male')),
                ('memberMatrix11', models.CharField(max_length=3, verbose_name='Members added - Female')),
                ('memberMatrix12', models.CharField(max_length=3, verbose_name='Members added - Others')),
                ('memberMatrix20', models.CharField(max_length=3, verbose_name='Members left - Male')),
                ('memberMatrix21', models.CharField(max_length=3, verbose_name='Members left - Female')),
                ('memberMatrix22', models.CharField(max_length=3, verbose_name='Members left - Others')),
                ('memberMatrix30', models.CharField(max_length=3, verbose_name='Prospective - Male')),
                ('memberMatrix31', models.CharField(max_length=3, verbose_name='Prospective - Female')),
                ('memberMatrix32', models.CharField(max_length=3, verbose_name='Prospective - Others')),
                ('memberMatrix40', models.CharField(max_length=3, verbose_name='Guests - Male')),
                ('memberMatrix41', models.CharField(max_length=3, verbose_name='Guests - Female')),
                ('memberMatrix42', models.CharField(max_length=3, verbose_name='Guests - Others')),
                ('dues00', models.CharField(max_length=10, verbose_name='Dues paid upto last month')),
                ('dues01', models.CharField(max_length=10, verbose_name='Payment for new members')),
                ('dues02', models.CharField(max_length=10, verbose_name='New members inducted this month')),
                ('dues03', models.CharField(max_length=10, verbose_name='Total District Dues paid')),
                ('bulletin00', models.CharField(max_length=10, verbose_name='Name of Bulletin')),
                ('bulletin01', models.CharField(max_length=10, verbose_name='Type of Bulletin')),
                ('bulletin02', models.CharField(max_length=10, verbose_name='Link')),
                ('bulletin03', models.CharField(max_length=10, verbose_name='Issued on')),
                ('bulletin04', models.CharField(max_length=10, verbose_name='Last Issued on')),
                ('bulletin05', models.CharField(max_length=10, verbose_name='Frequency')),
                ('feedback00', models.CharField(max_length=10, verbose_name='Feedback Q1')),
                ('feedback01', models.CharField(max_length=10, verbose_name='Feedback Q2')),
                ('feedback02', models.CharField(max_length=10, verbose_name='Feedback Q3')),
                ('feedback03', models.CharField(max_length=10, verbose_name='Feedback Q4')),
                ('suggestion00', models.TextField(max_length=99, verbose_name='Suggestions')),
                ('club', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
