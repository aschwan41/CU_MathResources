from django.urls import path

from . import views

urlpatterns = [
  path('', views.availableCourses),
  path('course/<str:subject>/<int:code>/',views.course),
  path('chapter/<int:key>/',views.chapter)
]