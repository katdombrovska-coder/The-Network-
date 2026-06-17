from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")


# ----- Models -----
class PartnershipApplication(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    company: str
    business_type: str
    ecosystem_interest: Optional[str] = ""
    message: Optional[str] = ""
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class PartnershipApplicationCreate(BaseModel):
    name: str
    email: EmailStr
    company: str
    business_type: str
    ecosystem_interest: Optional[str] = ""
    message: Optional[str] = ""


# ----- Routes -----
@api_router.get("/")
async def root():
    return {"message": "Ecosystem Partnership Program API"}


@api_router.post("/applications", response_model=PartnershipApplication)
async def create_application(payload: PartnershipApplicationCreate):
    application = PartnershipApplication(**payload.model_dump())
    doc = application.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.applications.insert_one(doc)
    return application


@api_router.get("/applications", response_model=List[PartnershipApplication])
async def list_applications():
    items = await db.applications.find({}, {"_id": 0}).sort("created_at", -1).to_list(1000)
    for item in items:
        if isinstance(item.get('created_at'), str):
            item['created_at'] = datetime.fromisoformat(item['created_at'])
    return items


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
