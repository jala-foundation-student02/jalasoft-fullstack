from django.contrib import admin
from django.urls import path, include
from app import views

urlpatterns = [
    path('car', views.car, name='car'),
    path('accessToApi', views.accessToApi, name='accessToApi'),
]
