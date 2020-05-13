from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from django.core import serializers
from .models import Chapter,Course

markdownFilePath = ".\\markdownFiles\\"

def availableCourses(request):
  """Returns the list of currently available courses"""
  courseList = Course.objects.all()
  response = [{"subject":c.subject,"code":c.code} for c in courseList]
  return JsonResponse(response,safe=False)

def getCourse(request,subject,code):
  """Returns the detailed information of the selected course"""
  course = Course.objects.filter(subject=subject,code=code)
  response = serializers.serialize('json',course)
  return JsonResponse(response,safe=False)

def getChapter(request,key):
  chapter = Chapter.objects.get(pk=key)
  response = chapter.title
  return JsonResponse(response,safe=False)

def getChapterMD(request,key):
  """Returns markdown file of selected chapters"""
  chapter = Chapter.objects.get(pk=key)
  filePath = markdownFilePath + chapter.fileName
  with open(filePath,"r") as file: markdown = file.read()
  return JsonResponse({"markdownString":markdown})