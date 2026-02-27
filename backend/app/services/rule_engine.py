import re

def run_rule_engine(data):
    text = data.bio + " " + " ".join(data.posts)

    pii_score = 0
    professional_score = 0
    location_score = 0
    routine_score = 0
    risk_tags = []

    # Email detection
    if re.search(r"[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+", text):
        pii_score += 30
        risk_tags.append("Public email detected")

    # Job detection
    if any(word in text.lower() for word in ["engineer", "developer", "manager", "analyst"]):
        professional_score += 15
        risk_tags.append("Job role mentioned")

    # Travel detection
    if any(word in text.lower() for word in ["travel", "trip", "goa", "vacation"]):
        location_score += 15
        risk_tags.append("Travel plans shared")

    # Routine detection
    if any(word in text.lower() for word in ["every day", "daily", "6am", "gym"]):
        routine_score += 10
        risk_tags.append("Routine pattern exposed")

    total_score = pii_score + professional_score + location_score + routine_score

    if total_score > 60:
        risk_level = "High"
    elif total_score > 30:
        risk_level = "Medium"
    else:
        risk_level = "Low"

    return {
        "overall_risk_score": total_score,
        "risk_level": risk_level,
        "breakdown": {
            "pii_exposure": pii_score,
            "professional_exposure": professional_score,
            "location_exposure": location_score,
            "routine_exposure": routine_score,
        },
        "risk_tags": risk_tags,
    }