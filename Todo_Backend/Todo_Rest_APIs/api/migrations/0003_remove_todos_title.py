# Generated by Django 4.2.3 on 2023-07-17 14:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_alter_todos_title'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='todos',
            name='title',
        ),
    ]
