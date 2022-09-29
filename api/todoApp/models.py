from django.db import models

# Create your models here.
class Todo(models.Model):
    title=models.CharField(max_length=100)
    description =models.CharField(max_length=100)
    completed=models.BooleanField(default=False)
    favourite= models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-created_at"]
