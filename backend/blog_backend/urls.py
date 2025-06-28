from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.http import HttpResponse
from blog.views import PostList, PostDetail, VotePost, ContactView

def home(request):
    return HttpResponse("Welcome to the Web App!")

urlpatterns = [
    path('', home, name='home'),  # مسیر ریشه
    path('admin/', admin.site.urls),
    path('api/posts/', PostList.as_view(), name='post-list'),
    path('api/posts/<int:pk>/', PostDetail.as_view(), name='post-detail'),
    path('api/posts/<int:pk>/vote/', VotePost.as_view(), name='post-vote'),
    path('api/contact/', ContactView.as_view(), name='contact'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)