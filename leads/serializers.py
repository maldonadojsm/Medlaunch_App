from rest_framework import serializers
from leads.models import Lead


# Lead serializers
class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        # Fields created for class Lead in leads/models.py.
        # '__all__' -> Grab all created fields in class Patients
        fields = '__all__'
