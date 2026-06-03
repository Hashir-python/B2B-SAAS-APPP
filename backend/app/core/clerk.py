from clerk_backend_api import Clerk
from app.core.config import settings

clerk=Clerk(
    baerer_key=settings.CLERK_SECRET_KEY
)