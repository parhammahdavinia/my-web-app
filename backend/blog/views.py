from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Post
from .serializers import PostSerializer

class PostList(APIView):
    def get(self, request):
        posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)

class PostDetail(APIView):
    def get(self, request, pk):
        post = Post.objects.get(pk=pk)
        serializer = PostSerializer(post)
        return Response(serializer.data)

class LikePost(APIView):
    def post(self, request, pk):
        post = Post.objects.get(pk=pk)
        post.likes += 1
        post.save()
        serializer = PostSerializer(post)
        return Response(serializer.data)

class DislikePost(APIView):
    def post(self, request, pk):
        post = Post.objects.get(pk=pk)
        post.dislikes += 1
        post.save()
        serializer = PostSerializer(post)
        return Response(serializer.data)