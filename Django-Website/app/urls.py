from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include
from django.contrib import admin

from .views import app_index, upload_image

urlpatterns = [
    path('', app_index),
    path('admin/', admin.site.urls),
    path('books/', include('books.urls')),
    path('posts/', include('posts.urls')),
    path('accounts/', include('allauth.urls')),
    path('accounts/', include('accounts.urls')),

    path('upload', upload_image, name="upload_image"),
]


if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL,
                          document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
