from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Post, Contact, UserVote
from .serializers import PostSerializer, ContactSerializer, UserVoteSerializer

class PostList(APIView):
    def get(self, request):
        posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True, context={'request': request})
        return Response(serializer.data)

class PostDetail(APIView):
    def get(self, request, pk):
        post = Post.objects.get(pk=pk)
        serializer = PostSerializer(post, context={'request': request})
        return Response(serializer.data)

class VotePost(APIView):
    def get_client_ip(self, request):
        x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
        if x_forwarded_for:
            ip = x_forwarded_for.split(',')[0]
        else:
            ip = request.META.get('REMOTE_ADDR')
        return ip

    def post(self, request, pk):
        post = Post.objects.get(pk=pk)
        vote_type = request.data.get('vote_type')  # 'like' or 'dislike'
        user_ip = self.get_client_ip(request)
        
        if vote_type not in ['like', 'dislike']:
            return Response({'error': 'Invalid vote type'}, status=status.HTTP_400_BAD_REQUEST)
        
        # بررسی اینکه آیا کاربر قبلاً رای داده است
        try:
            existing_vote = UserVote.objects.get(post=post, user_ip=user_ip)
            
            # اگر رای قبلی همان نوع باشد، آن را حذف کن
            if existing_vote.vote_type == vote_type:
                existing_vote.delete()
                if vote_type == 'like':
                    post.likes = max(0, post.likes - 1)
                else:
                    post.dislikes = max(0, post.dislikes - 1)
                post.save()
                return Response({
                    'message': f'{vote_type} removed',
                    'likes': post.likes,
                    'dislikes': post.dislikes,
                    'user_vote': None
                })
            
            # اگر رای قبلی متفاوت باشد، آن را تغییر بده
            old_vote_type = existing_vote.vote_type
            existing_vote.vote_type = vote_type
            existing_vote.save()
            
            # آپدیت شمارنده‌ها
            if old_vote_type == 'like':
                post.likes = max(0, post.likes - 1)
            else:
                post.dislikes = max(0, post.dislikes - 1)
            
            if vote_type == 'like':
                post.likes += 1
            else:
                post.dislikes += 1
            
            post.save()
            
            return Response({
                'message': f'Vote changed from {old_vote_type} to {vote_type}',
                'likes': post.likes,
                'dislikes': post.dislikes,
                'user_vote': vote_type
            })
            
        except UserVote.DoesNotExist:
            # رای جدید
            UserVote.objects.create(
                post=post,
                user_ip=user_ip,
                vote_type=vote_type
            )
            
            if vote_type == 'like':
                post.likes += 1
            else:
                post.dislikes += 1
            
            post.save()
            
            return Response({
                'message': f'{vote_type} added',
                'likes': post.likes,
                'dislikes': post.dislikes,
                'user_vote': vote_type
            })

class ContactView(APIView):
    def post(self, request):
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({
                'message': 'پیام شما با موفقیت ارسال شد!',
                'data': serializer.data
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        contacts = Contact.objects.all()
        serializer = ContactSerializer(contacts, many=True)
        return Response(serializer.data)