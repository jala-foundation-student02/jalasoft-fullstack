from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

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
    #else:
    #    return HttpResponse("its not get!")
    # ====================
    elif request.method == 'POST':
        asd = json.loads(request.body)
        print(asd)
        myResponse = {"hola": "response"}
        # try:
        #     Person(
        #         first_name=asd["firstName"],
        #         last_name=asd["lastName"]).save()
        #     myResponse = {
        #         "info": "backend got correctly your post petition!"
        #     }
        # except:
        #     myResponse = {
        #         "info": "json format is not the correct one. Backend expected a diferent one"
        #     }

        return JsonResponse(myResponse,safe=False)
