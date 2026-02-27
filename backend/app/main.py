from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Import schema + orchestrator
from app.models.schemas import PersonaInput
from app.orchestrator import run_hybrid_engine

app = FastAPI(
    title="PersonaRisk AI - Hybrid Multi-Layer Threat Engine",
    description="A 3-layer security intelligence system combining Rule-based, NLP, and LLM analysis.",
    version="1.0.0"
)

# CORS configuration for frontend integration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {
        "status": "online",
        "engine": "PersonaRisk AI Hybrid Engine",
        "layers": [
            "Deterministic Risk Engine",
            "NLP Intelligence Layer",
            "LLM Threat Simulation"
        ]
    }

@app.post("/analyze")
def analyze_persona(data: PersonaInput):
    """
    Main endpoint that triggers the hybrid analysis flow.
    """
    return run_hybrid_engine(data)