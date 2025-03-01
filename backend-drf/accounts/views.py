from django.shortcuts import render
from django.contrib.auth.models import User

from .serializers import UserSerializer
from rest_framework import generics
from rest_framework.permissions import AllowAny

# Create your views here.


class RegisterUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    permission_classes = [AllowAny]

