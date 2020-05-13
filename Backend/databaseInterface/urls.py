from django.urls import path

from . import views

urlpatterns = [
  path('', views.availableCourses),
  path('course/<str:subject>/<int:code>/',views.getCourse),
  path('chapter/<int:key>/',views.getChapter),
  path('chapter/<int:key>/md',views.getChapterMD),
]