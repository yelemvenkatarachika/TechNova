from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from app.orchestrator import run_hybrid_engine

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class PersonaInput(BaseModel):
    bio: str
    posts: list[str]


@app.get("/")
def root():
    return {
        "status": "online",
        "engine": "PersonaRisk AI Hybrid Engine",
        "layers": [
            "Deterministic Risk Engine",
            "NLP Intelligence Layer",
            "LLM Threat Simulation"
        ],
    }


@app.post("/analyze")
async def analyze_persona(data: PersonaInput):
    return await run_hybrid_engine(data)