from django.db import models

# Create your models here.
class Account(models.Model):
    type_options = (
      ('checking', 'CHECKING'),
      ('savings', 'SAVINGS'),
      ('credit', 'CREDIT'),
  )
  
    account_name = models.CharField(max_length=200, default='Please enter account name')
    
    account_no = models.CharField(max_length=200, default='Please enter account number')
    
    account_type = models.CharField(
        max_length=200,
        choices=type_options,
        default=type_options[0],
    )
    
    account_balance = models.CharField(max_length=200, default='Please enter account balance')
    
    def __str__(self):
        return(f"{self.pk} | Account Name: {self.account_name} | Account No: {self.account_no} | Account Type: {self.account_type}")


class Product(models.Model):
  loan_options = (
      ('student', 'STUDENT'),
      ('home', 'HOME'),
      ('car', 'CAR'),
  )

  loan_type = models.CharField(
      max_length=200,
      choices=loan_options,
      default=loan_options[0],
  )

  loan_balance = models.CharField(max_length=200, default='Please enter loan balance')

  amount_due = models.CharField(max_length=200, default='Please enter amount due')

  date_due = models.CharField(max_length=200, default='Please enter payment due date')

  def __str__(self):
    return(f"{self.pk} | Loan Type: {self.loan_type} | Loan Balance: {self.loan_balance}")

class Customer(models.Model):
    customer_first_name = models.CharField(max_length=200, default='Please enter member first name')

    customer_last_name = models.CharField(max_length=200, default='Please enter member last name')

    customer_email = models.EmailField(max_length=250, default='Please enter member email')

    def __str__(self):
        return(f"{self.pk} | Customer Full Name: {self.customer_last_name}, {self.customer_first_name}")

class Branch(models.Model):
    branch_name = models.CharField(max_length=200, default='Please enter branch name')

    branch_location = models.CharField(max_length=200, default='Please enter branch location')

    def __str__(self):
        return(f" Branch Name: {self.branch_name} | Branch Location: {self.branch_location}")
