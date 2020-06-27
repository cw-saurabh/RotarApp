# Generated by Django 2.2.13 on 2020-06-22 21:00

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Club',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30, verbose_name='Club Name')),
                ('zone', models.IntegerField(verbose_name='Zone')),
                ('rotaryId', models.IntegerField(verbose_name='Rotary Id')),
                ('clubCode', models.IntegerField(verbose_name='Club Code')),
                ('logo', models.CharField(blank=True, max_length=30, verbose_name='Logo Filename')),
                ('email', models.EmailField(blank=True, max_length=254, verbose_name='Email Id')),
                ('password', models.CharField(max_length=10, verbose_name='Password')),
            ],
        ),
    ]
