from django.contrib import admin
from .models import Post, Contact, UserVote

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'likes', 'dislikes', 'created_at')
    list_filter = ('created_at',)
    search_fields = ('title', 'description')

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone', 'created_at', 'is_read')
    list_filter = ('created_at', 'is_read')
    search_fields = ('name', 'email', 'message')
    readonly_fields = ('created_at',)

@admin.register(UserVote)
class UserVoteAdmin(admin.ModelAdmin):
    list_display = ('get_user_identifier', 'post', 'vote_type', 'created_at')
    list_filter = ('vote_type', 'created_at')
    search_fields = ('user_ip', 'post__title')
    readonly_fields = ('created_at',)
    
    def get_user_identifier(self, obj):
        return obj.user.username if obj.user else obj.user_ip
    get_user_identifier.short_description = 'User'