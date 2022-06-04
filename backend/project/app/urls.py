from django.contrib import admin
from django.urls import path, include
from app import views

urlpatterns = [
    path('api/v1/order', views.car, name='car'),
    path('accessToApi', views.accessToApi, name='accessToApi'),
]
