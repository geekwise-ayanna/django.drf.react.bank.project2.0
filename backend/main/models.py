from django.db import models

# Create your models here.
class Account(models.Model):
    type_options = (
      ('checking', 'CHECKING'),
      ('savings', 'SAVINGS'),
      ('credit', 'CREDIT'),
  )
  
    account_name = models.CharField(max_length=40)
    
    account_no = models.CharField(max_length=10)
    
    account_type = models.CharField(
        max_length=10,
        choices=type_options,
        default=type_options[0],
    )
    
    account_balance = models.CharField(max_length=12)
    
    def __str__(self):
        return(f"{self.pk} | Account Name: {self.account_name} | Account No: {self.account_no} | Account Type: {self.account_type}")


class Product(models.Model):
  loan_options = (
      ('student', 'STUDENT'),
      ('home', 'HOME'),
      ('car', 'CAR'),
  )

  loan_type = models.CharField(
      max_length=10,
      choices=loan_options,
      default=loan_options[0],
  )

  loan_balance = models.CharField(max_length=12)

  amount_due = models.CharField(max_length=10)

  date_due = models.CharField(max_length=10)

  def __str__(self):
    return(f"{self.pk} | Loan Type: {self.loan_type} | Loan Balance: {self.loan_balance}")

class Customer(models.Model):
    customer_fname=models.CharField(max_length=20)
    customer_lname=models.CharField(max_length=20)

    def __str__(self):
        return(f" Customer Full Name: {self.customer_lname}, {self.customer_fname}")

class Branche(models.Model):
    branche_name=models.CharField(max_length=15)
    branche_location=models.CharField(max_length=10)

    def __str__(self):
        return(f" Branch Name: {self.branche_name} | Branch Location: {self.branche_location}")