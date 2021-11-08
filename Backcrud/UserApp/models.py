from django.db import models

# Create your models here.
class Users(models.Model):
    User_id = models.AutoField(primary_key=True)
    First_name = models.CharField(max_length=500)
    Last_name = models.CharField(max_length=500)
    Email = models.CharField(max_length=500)
    Cin = models.CharField(max_length=500)
    Password = models.CharField(max_length=500)
    Role = models.CharField(max_length=500)
