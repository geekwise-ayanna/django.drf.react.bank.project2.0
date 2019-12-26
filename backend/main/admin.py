from django.contrib import admin
from .models import Account, Branche, Customer, Product

# Register your models here.
admin.site.register(Account)
admin.site.register(Branche)
admin.site.register(Customer)
admin.site.register(Product)