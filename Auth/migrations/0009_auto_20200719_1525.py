# Generated by Django 2.2.13 on 2020-07-19 09:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Auth', '0008_auto_20200719_1508'),
    ]

    operations = [
        migrations.AlterField(
            model_name='club',
            name='logo',
            field=models.ImageField(default='logos/district_logo.png', upload_to='logos', verbose_name='Logo'),
        ),
    ]
