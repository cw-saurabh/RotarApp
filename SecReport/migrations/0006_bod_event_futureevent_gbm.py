# Generated by Django 2.2.13 on 2020-07-21 09:48

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('SecReport', '0005_auto_20200721_1418'),
    ]

    operations = [
        migrations.CreateModel(
            name='GBM',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('gbm1', models.DateTimeField(default=datetime.datetime.now, verbose_name='Date')),
                ('gbm3', models.BooleanField(verbose_name='Bylaws passed?')),
                ('gbm4', models.BooleanField(verbose_name='Budget passed?')),
                ('gbm2', models.CharField(max_length=10, verbose_name='Attendance')),
                ('club', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('reportId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='SecReport.Report')),
            ],
        ),
        migrations.CreateModel(
            name='FutureEvent',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('futurEvent0', models.DateTimeField(default=datetime.datetime.now, verbose_name='Date')),
                ('futurEvent1', models.CharField(max_length=50, verbose_name='Description')),
                ('futurEvent2', models.CharField(max_length=5, verbose_name='Avenue')),
                ('club', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('reportId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='SecReport.Report')),
            ],
        ),
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('event0', models.DateTimeField(default=datetime.datetime.now, verbose_name='Date')),
                ('event1', models.CharField(max_length=10, verbose_name='Name')),
                ('event2', models.CharField(max_length=5, verbose_name='Avenue')),
                ('event3', models.CharField(max_length=10, verbose_name='Attendance')),
                ('event4', models.CharField(max_length=10, verbose_name='Volunteer Hours')),
                ('event5', models.CharField(max_length=10, verbose_name='Funds Raised')),
                ('event6', models.CharField(max_length=50, verbose_name='Description')),
                ('event7', models.CharField(max_length=50, verbose_name='Instagram Link')),
                ('club', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('reportId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='SecReport.Report')),
            ],
        ),
        migrations.CreateModel(
            name='BOD',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('bod1', models.DateTimeField(default=datetime.datetime.now, verbose_name='Date')),
                ('bod2', models.CharField(max_length=50, verbose_name='Agenda')),
                ('bod3', models.BooleanField(verbose_name='Bylaws passed?')),
                ('bod4', models.BooleanField(verbose_name='Budget passed?')),
                ('bod5', models.CharField(max_length=10, verbose_name='Attendance')),
                ('club', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('reportId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='SecReport.Report')),
            ],
        ),
    ]