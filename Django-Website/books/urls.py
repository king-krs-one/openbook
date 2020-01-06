from django.urls import path

from .views import books_read, books_edit, books_create, books_list

urlpatterns = [
    path('read/', books_read, name='books_read'),
    path('edit/', books_edit, name='books_edit'),
    path('create/', books_create, name='books_create'),
    path('list/', books_list, name='books_list'),
]
