from django.db import models

# Create your models here.
class Todo(models.Model):
    title=models.CharField(max_length=100)
    description =models.CharField(max_length=100)
    completed=models.BooleanField(default=False)
    favourite= models.BooleanField(default=False)

#     def _str_(self):
#         return self.title
# class Favourite(models.Model):
#     title = models.ForeignKey(Todo,on_delete=models.SET_NULL,blank=True,null=True)

#     def __str__(self):
#         return str(self.title)