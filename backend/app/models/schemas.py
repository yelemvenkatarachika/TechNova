from pydantic import BaseModel
from typing import List, Dict

class PersonaInput(BaseModel):
    bio: str
    posts: List[str]

class RiskResponse(BaseModel):
    overall_risk_score: int
    risk_level: str
    breakdown: Dict[str, int]
    risk_tags: List[str]
    simulated_attack: str
    mitigation_steps: List[str]