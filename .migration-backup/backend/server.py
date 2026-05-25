import os
import uuid
from datetime import datetime, timezone
from typing import Optional

from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel, EmailStr, Field

load_dotenv()

MONGO_URL = os.environ.get("MONGO_URL")
DB_NAME = os.environ.get("DB_NAME")

client = AsyncIOMotorClient(MONGO_URL)
db = client[DB_NAME]

app = FastAPI(title="Tattvashila Ecosystem API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class IntakeIn(BaseModel):
    reflection: str = Field(..., min_length=1, max_length=600)
    email: EmailStr


class IntakeOut(BaseModel):
    id: str
    received_at: str


@app.get("/api/health")
async def health():
    return {"status": "ok", "service": "tattvashila-root"}


@app.post("/api/intake", response_model=IntakeOut)
async def submit_intake(payload: IntakeIn):
    record = {
        "id": str(uuid.uuid4()),
        "reflection": payload.reflection.strip(),
        "email": payload.email.lower().strip(),
        "received_at": datetime.now(timezone.utc).isoformat(),
    }
    await db.intake_submissions.insert_one(record.copy())
    return IntakeOut(id=record["id"], received_at=record["received_at"])


@app.get("/api/intake/count")
async def intake_count():
    count = await db.intake_submissions.count_documents({})
    return {"count": count}
