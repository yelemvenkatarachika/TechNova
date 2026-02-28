from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import spacy
import re

# Load NLP model
nlp = spacy.load("en_core_web_sm")

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Input Schema
class PersonaInput(BaseModel):
    bio: str
    posts: list[str]


# Root Endpoint
@app.get("/")
def root():
    return {
        "status": "online",
        "engine": "PersonaRisk AI Hybrid Engine",
        "layers": [
            "Deterministic Risk Engine",
            "NLP Intelligence Layer",
            "Weighted Risk Scoring",
            "Dynamic Threat Simulation"
        ],
    }


# -------------------------
# NLP Entity Extraction
# -------------------------

def extract_entities(text):
    doc = nlp(text)

    entities = {
        "emails": re.findall(r'\S+@\S+', text),
        "phones": re.findall(r'\b\d{10}\b', text),
        "locations": [],
        "organizations": [],
        "persons": []
    }

    for ent in doc.ents:
        if ent.label_ == "GPE":
            entities["locations"].append(ent.text)
        elif ent.label_ == "ORG":
            entities["organizations"].append(ent.text)
        elif ent.label_ == "PERSON":
            entities["persons"].append(ent.text)

    return entities


# -------------------------
# Analyze Endpoint
# -------------------------

@app.post("/analyze")
async def analyze_persona(data: PersonaInput):

    combined_text = data.bio + " " + " ".join(data.posts)
    entities = extract_entities(combined_text)

    # -------------------------
    # Weighted Risk Scoring
    # -------------------------

    risk_score = 0

    breakdown = {
        "pii_exposure": 0,
        "professional_exposure": 0,
        "location_exposure": 0,
        "routine_exposure": 0
    }

    # Email Exposure
    if entities["emails"]:
        breakdown["pii_exposure"] += 30
        risk_score += 30

    # Phone Exposure
    if entities["phones"]:
        breakdown["pii_exposure"] += 20
        risk_score += 20

    # Location Exposure
    if entities["locations"]:
        breakdown["location_exposure"] += 20
        risk_score += 20

    # Organization Exposure
    if entities["organizations"]:
        breakdown["professional_exposure"] += 15
        risk_score += 15

    # Person Mentions
    if entities["persons"]:
        breakdown["professional_exposure"] += 10
        risk_score += 10

    # Cap risk score
    risk_score = min(risk_score, 100)

    # -------------------------
    # Dynamic Severity
    # -------------------------

    if risk_score >= 70:
        severity = "High"
    elif risk_score >= 40:
        severity = "Medium"
    else:
        severity = "Low"

    # -------------------------
    # Risk Tags
    # -------------------------

    risk_tags = []

    if entities["emails"]:
        risk_tags.append("Public email detected")

    if entities["phones"]:
        risk_tags.append("Phone number shared")

    if entities["locations"]:
        risk_tags.append("Location exposure")

    if entities["organizations"]:
        risk_tags.append("Workplace mentioned")

    if entities["persons"]:
        risk_tags.append("Identity exposure")

    # -------------------------
    # Dynamic Threat Simulation
    # -------------------------

    simulated_attack = {
        "attack_vector": "Targeted Social Engineering",
        "impact": "Potential identity compromise or system intrusion",
        "severity": severity,
        "recommendations": [
            {
                "description": "Avoid sharing personal contact details publicly",
                "urgency": "High"
            },
            {
                "description": "Enable multi-factor authentication on all major accounts",
                "urgency": "Medium"
            },
            {
                "description": "Limit public visibility of sensitive profile information",
                "urgency": "Medium"
            }
        ]
    }

    return {
        "overall_risk_score": risk_score,
        "breakdown": breakdown,
        "simulated_attack": simulated_attack,
        "risk_tags": risk_tags
    }