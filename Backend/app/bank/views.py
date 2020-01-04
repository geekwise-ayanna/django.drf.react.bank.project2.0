from rest_framework import viewsets
from .serializers import Account_Serializer, Branch_Serializer, Customer_Serializer, Product_Serializer
from .models import Account, Branch, Customer, Product


class Branch_Viewset(viewsets.ModelViewSet):
    queryset = Branch.objects.all()
    serializer_class = Branch_Serializer


class Customer_Viewset(viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = Customer_Serializer


class Account_Viewset(viewsets.ModelViewSet):
    queryset = Account.objects.all()
    serializer_class = Account_Serializer


class Product_Viewset(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = Product_Serializer
