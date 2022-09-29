import django
from django.shortcuts import render
from rest_framework import viewsets
from .models import Todo
from django_filters.rest_framework import DjangoFilterBackend
from .serializers import TodoSerializer
# Create your views here.


class TodoViewset(viewsets.ModelViewSet):
    queryset =Todo.objects.all()
    serializer_class =TodoSerializer
    filter_backends=[DjangoFilterBackend]
    filterset_fields=['completed']

# class TodoCompleted(viewsets.ModelViewSet):
#     queryset =Todo.objects.filter(completed=True)
#     serializer_class =TodoSerializer