from leads.models import Lead
from rest_framework import viewsets, permissions
from .serializers import LeadSerializer

# Lead Viewset ()

class LeadViewSet(viewsets.ModelViewSet):
    # Query that captures all the leads
    queryset = Lead.objects.all()
    permision_classes = [
        permissions.AllowAny
    ]
    serializer_class = LeadSerializer
