from django.shortcuts import render
from django.http import JsonResponse
import os

# Create your views here.


def app_index(request):

    context = {
        'title': "index"
    }

    return render(request, "app/index.html", context)


def upload_image(request):
    if request.method == 'POST':
        handle_uploaded_file(
            request.FILES['upload'], str(request.FILES['upload']))

        context = {
            "url": "/media/images/" + str(request.FILES['upload'])
        }

        return JsonResponse(context)

    context = {
        "error": {
            "message": "The image upload failed for some reason."
        }
    }

    return JsonResponse(context)


def handle_uploaded_file(file, filename):
    if not os.path.exists('media/images/'):
        os.mkdir('media/images/')

    with open('media/images/' + filename, 'wb+') as destination:
        for chunk in file.chunks():
            destination.write(chunk)
