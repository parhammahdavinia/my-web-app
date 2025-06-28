from rest_framework import serializers
from .models import Post, Contact, UserVote

class PostSerializer(serializers.ModelSerializer):
    user_vote = serializers.SerializerMethodField()
    
    class Meta:
        model = Post
        fields = ['id', 'title', 'description', 'image', 'likes', 'dislikes', 'created_at', 'user_vote']
    
    def get_user_vote(self, obj):
        request = self.context.get('request')
        if request:
            user_ip = self.get_client_ip(request)
            try:
                vote = UserVote.objects.get(
                    post=obj,
                    user_ip=user_ip
                )
                return vote.vote_type
            except UserVote.DoesNotExist:
                return None
        return None
    
    def get_client_ip(self, request):
        x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
        if x_forwarded_for:
            ip = x_forwarded_for.split(',')[0]
        else:
            ip = request.META.get('REMOTE_ADDR')
        return ip

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ['id', 'name', 'email', 'phone', 'message', 'created_at']

class UserVoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserVote
        fields = ['id', 'post', 'vote_type', 'created_at']
        read_only_fields = ['user_ip', 'user']