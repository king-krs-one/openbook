from django.shortcuts import render

# Create your views here.


def app_index(request):

    context = {
        'title': "index"
    }

    return render(request, "app/index.html", context)
