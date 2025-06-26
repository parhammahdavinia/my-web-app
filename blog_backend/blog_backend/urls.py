from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.http import HttpResponse
from blog.views import PostList, PostDetail, LikePost, DislikePost

def home(request):
    return HttpResponse("Welcome to the Web App!")

urlpatterns = [
    path('', home, name='home'),  # مسیر ریشه
    path('admin/', admin.site.urls),
    path('api/posts/', PostList.as_view(), name='post-list'),
    path('api/posts/<int:pk>/', PostDetail.as_view(), name='post-detail'),
    path('api/posts/<int:pk>/like/', LikePost.as_view(), name='post-like'),
    path('api/posts/<int:pk>/dislike/', DislikePost.as_view(), name='post-dislike'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)