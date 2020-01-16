from django.contrib import admin
from .models import Account, Branch, Member, Product

# Register your models here.
admin.site.register(Account)
admin.site.register(Branch)
admin.site.register(Member)
admin.site.register(Product)