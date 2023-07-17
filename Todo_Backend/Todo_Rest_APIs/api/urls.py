from django.urls import path
from .views import api_overview, TodoList, TodoCrud

urlpatterns = [
    path('', api_overview, name='api-overview'),
    path('todo-list/', TodoList.as_view(), name='todo-list'),
    path('todo/<str:pk>/', TodoCrud.as_view(), name='todo-crud'),
]