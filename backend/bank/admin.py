from django.contrib import admin
from .models import Account, Branch, Customer, Product

# Register your models here.
admin.site.register(Account)
admin.site.register(Branch)
admin.site.register(Customer)
admin.site.register(Product)