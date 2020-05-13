from django.shortcuts import render
from django.http import HttpResponse
from .models import Chapter,Course

def availableCourses(request):
  return HttpResponse("hi")

def course(request,subject,code):
  return HttpResponse("hi" + subject + str(code))

def chapter(request):
  return HttpResponse("hi" + str(key))