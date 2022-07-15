from rest_framework import routers
from .views import TodoViewset

router=routers.DefaultRouter()
router.register('todoApp',TodoViewset)

