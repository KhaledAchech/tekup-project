from django.conf.urls import url
from api import views


urlpatterns = [
    url(r'^candidature$',views.candidatureApi),
    url(r'^candidature/([0-9]+)$',views.candidatureApi)
]