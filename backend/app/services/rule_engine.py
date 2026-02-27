from app.utils.text_utils import extract_emails, extract_phones

def run_rule_engine(text: str):

    breakdown = {
        "pii_exposure": 0,
        "professional_exposure": 0,
        "location_exposure": 0,
        "routine_exposure": 0
    }

    tags = []

    emails = extract_emails(text)
    phones = extract_phones(text)

    if emails:
        breakdown["pii_exposure"] += 30
        tags.append("Public email detected")

    if phones:
        breakdown["pii_exposure"] += 20
        tags.append("Phone number detected")

    if "engineer" in text.lower() or "manager" in text.lower():
        breakdown["professional_exposure"] += 15
        tags.append("Job role mentioned")

    if "trip" in text.lower() or "travel" in text.lower():
        breakdown["location_exposure"] += 15
        tags.append("Travel plans shared")

    if "every day" in text.lower() or "daily" in text.lower():
        breakdown["routine_exposure"] += 10
        tags.append("Routine pattern exposed")

    total = sum(breakdown.values())

    return {
        "rule_score": total,
        "breakdown": breakdown,
        "tags": tags
    }