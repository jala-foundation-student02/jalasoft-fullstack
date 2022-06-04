from django.db import models

# Create your models here.


class Client(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)


class Product(models.Model):
    idProduct = models.CharField(max_length=30)

class Order(models.Model):
    products = models.CharField(max_length=100)
