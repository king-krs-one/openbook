from django.shortcuts import render

# Create your views here.


def accounts_profile(request):

    context = {
        'title': "user profile"
    }

    return render(request, "account/profile/profile_overview.html", context)
