from django.db import models

# Create your models here.

class Client(models.Model):
    Name = models.CharField(max_length=30)
    Phone_Number = models.IntegerField()
    #Number = models.IntegerField()
    Email = models.CharField(max_length=250)
