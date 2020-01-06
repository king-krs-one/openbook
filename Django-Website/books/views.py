from django.shortcuts import render

# Create your views here.


def books_read(request):

    context = {
        'title': "read a book"
    }

    return render(request, "book/book_read.html", context)


def books_edit(request):

    context = {
        'title': "edit a book"
    }

    return render(request, "book/book_edit.html", context)


def books_create(request):

    context = {
        'title': "write a book"
    }

    return render(request, "book/book_create.html", context)


def books_list(request):

    context = {
        'title': "list my books"
    }

    return render(request, "book/book_list.html", context)
