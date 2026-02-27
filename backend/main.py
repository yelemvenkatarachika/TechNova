from fastapi import FastAPI
from pydantic import BaseModel
from scoring import analyze_profile

app = FastAPI(
    title="PersonaRisk AI",
    description="AI-powered spear-phishing vulnerability assessment system",
    version="1.0.0"
)

class ProfileInput(BaseModel):
    bio: str
    posts: list[str]

@app.get("/")
def root():
    return {"message": "PersonaRisk AI Backend Running"}

@app.post("/analyze")
def analyze(data: ProfileInput):
    result = analyze_profile(data.bio, data.posts)
    return result