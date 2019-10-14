from rest_framework import routers
from .api import LeadViewSet

router = routers.DefaultRouter()
# Register routers
router.register('api/leads', LeadViewSet, 'leads')


urlpatterns = router.urls
