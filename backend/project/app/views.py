from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

from .models import Order

import json

import requests

# Create your views here.


def accessToApi(request):
    if request.method == 'GET':
        response = requests.get("https://api.storerestapi.com/products")
        return JsonResponse(response.json(), safe=False)

        
@csrf_exempt
def car(request):
    # ====================
    if request.method == 'GET':
        return HttpResponse("reponse!")
    # ====================
    elif request.method == 'POST':
        asd = json.loads(request.body)
        try:
            Order(products=asd["products"]).save()
            myResponse = {"info": "order created! :D"}
        except:
            myResponse = {"info": "something wrong happened"}
        
        return JsonResponse(myResponse,safe=False)
