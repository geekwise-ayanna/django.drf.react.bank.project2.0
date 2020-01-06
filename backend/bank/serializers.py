from rest_framework import serializers
from .models import Account, Branch, Customer, Product


class Branch_Serializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Branch
        fields = [
            'id',
            'location_name',
            'location'
        ]


class Customer_Serializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Customer
        fields = [
            'id',
            'customer_fname',
            'customer_lname',
        ]


class Account_Serializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Account
        fields = [
            'id',
            'account_name',
            'account_no',
            'account_type',
            'account_balance',
        ]


class Product_Serializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Product
        fields = [
            'id',
            'loan_type',
            'loan_balance',
            'amount_due',
            'date_due',
        ]
