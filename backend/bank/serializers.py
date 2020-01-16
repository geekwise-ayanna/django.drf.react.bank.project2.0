from rest_framework import serializers
from .models import Account, Branch, Member, Product


class Branch_Serializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Branch
        fields = [
            'id',
            'branch_name',
            'branch_location',
        ]


class Member_Serializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Member
        fields = [
            'id',
            'member_first_name',
            'member_last_name',
            'member_email',
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
