from django.db import models

# Create your models here

# Clinical Patient Model
class Lead(models.Model):
    # Patient Name
    name = models.CharField(max_length = 100)
    # Patient Age
    #age = models.IntegerField(max_length= 12)
    # Patient Email, Unique = T makes sure emails are unique
    email = models.EmailField(max_length = 100, unique = True)
    # Optional Patient Messages to Physician, blank = T sets messages as optional
    messages = models.CharField(max_length = 500, blank = True)
    # Patient Appointment Time. Auto_now_add adds Appointment Data Automatically
    appointment = models.DateTimeField(auto_now_add = True )




# class Doctor(model.Model):
#     # Doctor's Name
#     name = model.CharField(max_length = 100)
#     # Phyician ID
#     physician_id = models.CharField(max_length = 100, unique = T)
#     # Physicai Email
#     physician_email = models.EmailField(max_length = 100, unique = T)
#     # Patient Consultations
#     patient_consultation = models.DateTimeField(auto_now_add = T)
#     # Diagnosis
#     diagnosis = models.CharField(max_length = 1000, bl)
