# Generated by Django 2.2.13 on 2020-07-21 12:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('SecReport', '0008_auto_20200721_1726'),
    ]

    operations = [
        migrations.AddField(
            model_name='futureevent',
            name='futurEvent3',
            field=models.CharField(default='', max_length=5, verbose_name='Avenue'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='futureevent',
            name='futurEvent2',
            field=models.CharField(max_length=20, verbose_name='Name'),
        ),
    ]