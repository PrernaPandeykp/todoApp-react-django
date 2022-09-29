from rest_framework import routers
from .views import TodoViewset
# from django.urls import path, include
# from api import views
router=routers.DefaultRouter()
router.register('todoApp',TodoViewset)


# urlpatterns = [
#     path('', include(router.urls)),
#     path('completedList/', views.TodoCompleted.as_view()),
    
# ]