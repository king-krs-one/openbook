
from app.utils import memoize

from allauth.account.forms import (
    LoginForm
)


@memoize
def forms(request):
    return {
        "form_login": LoginForm
    }
