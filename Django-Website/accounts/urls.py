from django.urls import path

from .views import accounts_profile

urlpatterns = [
    path('profile/', accounts_profile),
]
