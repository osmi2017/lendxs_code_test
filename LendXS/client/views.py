from django.contrib.auth.models import User, Group
from client.models import Client
from rest_framework import viewsets
from rest_framework import permissions
from client.serializers import UserSerializer, GroupSerializer, ClientSerializer
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import pandas as pd

def check_file(uploaded_file):
        
    #converting dic to str 
        conv1 = str(uploaded_file)

    #Read file type csv and excel only
        #splitting 
        
        store2 = conv1.split(sep='.', maxsplit=1)
        print(store2)
        if store2[1].upper()=="CSV":
            return "csv"
        elif store2[1].upper()=="XLSX": 
            return "xlsx"
        else:
            return "Error: upload the file in csv or excel format"


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    #permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    #permission_classes = [permissions.IsAuthenticated]

class ClientList(APIView):
    """
    APIView endpoint that allows client to be listed or created.
    """
    def get(self, request, format=None):
        client1 = Client.objects.all()
        serializer = ClientSerializer(client1, many=True)
        return Response(serializer.data)

    def post(self, request,format=None):
        f= check_file(request.FILES['file'].name)
        
        if f=="csv":
           print(f) 
           df=pd.read_csv(request.FILES['file'])
        
           print(df)
        elif f=="xlsx":
           print(f) 
           df=pd.read_excel(request.FILES['file'])
        
           print(df)
        else:
            return Response(f,status=status.HTTP_406_NOT_ACCEPTABLE)
        if not df.empty:
            for index in range(len(df)):
                data={}
                data['Name']=df['Name'].values[index]
                data['Phone_Number']=int(df['Phone Number'].values[index])
                data['Email']=df['Email'].values[index]
                serializer = ClientSerializer(data=data)
                if serializer.is_valid():
                    serializer.save()

        return Response('ok', status=status.HTTP_201_CREATED)

    
    