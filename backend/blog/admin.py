from django.contrib import admin
from .models import Post

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'likes', 'dislikes', 'created_at')
    list_filter = ('created_at',)
    search_fields = ('title', 'description')