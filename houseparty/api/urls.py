from django.urls import path
# from .views import RoomView, RoomDetailView
from .views import RoomView, CreateRoomView, GetRoom, JoinRoom

urlpatterns = [
    # path('room/', RoomView.as_view()),
    path('room/', RoomView.as_view()),
    path('create-room/', CreateRoomView.as_view()),
    path('get-room/', GetRoom.as_view()),
    path('join-room/', JoinRoom.as_view()),
    # path('room/<str:pk>/', RoomDetailView),
]
