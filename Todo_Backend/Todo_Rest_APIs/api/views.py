from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework import status

from .models import Todos
from .serializers import TodosSerializer

# Create your views here.
def api_overview(request):
    all_api = {
        "todo-list": '/api/todo-list/',
        "single todo (CRUD)": '/api/todo/id/', 
    }
    return JsonResponse(all_api)


#------------------------------------ Todo-List
class TodoList(APIView):
    def get(self, request):
        todos = Todos.objects.all()
        serializer = TodosSerializer(todos, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = TodosSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_406_NOT_ACCEPTABLE)
        
    

#------------------------------------ Todo-CRUD
class TodoCrud(APIView):
    
    def get(self, request, pk):
        try:
            todo = Todos.objects.get(id=pk)
            serializer = TodosSerializer(todo)
            return Response(serializer.data)
        except Exception as e:
            print(e)
            return Response(status=status.HTTP_404_NOT_FOUND)
    

    def put(self, request, pk):
        todo = Todos.objects.get(id=pk)
        serializer = TodosSerializer(instance=todo, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        try:
            todo = Todos.objects.get(id=pk)
            todo.delete()
            return Response(status=status.HTTP_200_OK)
        except Exception as e:
            return Response(status=status.HTTP_404_NOT_FOUND)
