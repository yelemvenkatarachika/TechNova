import re
from nltk.sentiment import SentimentIntensityAnalyzer

sia = SentimentIntensityAnalyzer()

# --------------------------
# Detection Functions
# --------------------------

def detect_email(text):
    return bool(re.search(r"\S+@\S+", text))

def detect_phone(text):
    return bool(re.search(r"\b\d{10}\b", text))

def detect_employer(text):
    keywords = [
        "engineer", "developer", "manager",
        "analyst", "intern", "company",
        "inc", "ltd", "corp", "technologies"
    ]
    return any(word in text.lower() for word in keywords)

def detect_location(text):
    locations = [
        "new york", "london", "paris",
        "hyderabad", "bangalore",
        "mumbai", "delhi", "chennai"
    ]
    return any(loc in text.lower() for loc in locations)

def detect_travel(text):
    travel_words = [
        "flight", "trip", "vacation",
        "airport", "travel", "leaving for"
    ]
    return any(word in text.lower() for word in travel_words)

def detect_routine(text):
    routine_patterns = [
        "every monday", "every day",
        "daily", "morning routine",
        "gym at", "office at", "wake up at"
    ]
    return any(pattern in text.lower() for pattern in routine_patterns)

def sentiment_score(text):
    score = sia.polarity_scores(text)
    return score["compound"]

# --------------------------
# Risk Summary Generator
# --------------------------

def generate_risk_summary(score, categories):
    if score >= 70:
        return "This profile shows high vulnerability due to exposure of sensitive personal and behavioral information."
    elif score >= 40:
        return "This profile shows moderate vulnerability due to selective disclosure of identifiable information."
    else:
        return "This profile shows low vulnerability with minimal publicly exposed sensitive information."

# --------------------------
# Main Analysis Function
# --------------------------

def analyze_profile(bio, posts):

    combined_text = bio + " " + " ".join(posts)

    score = 0
    breakdown = {
        "PII_Exposure": 0,
        "Professional_Disclosure": 0,
        "Location_Risk": 0,
        "Behavioral_Risk": 0,
        "Emotional_Risk": 0
    }

    risk_factors = []
    recommendations = []

    # -------- PII Exposure --------
    if detect_email(combined_text):
        breakdown["PII_Exposure"] += 30
        score += 30
        risk_factors.append("Public email detected")
        recommendations.append("Avoid posting email publicly.")

    if detect_phone(combined_text):
        breakdown["PII_Exposure"] += 20
        score += 20
        risk_factors.append("Phone number detected")
        recommendations.append("Remove phone numbers from public profiles.")

    # -------- Professional Disclosure --------
    if detect_employer(combined_text):
        breakdown["Professional_Disclosure"] += 15
        score += 15
        risk_factors.append("Employer or job role mentioned")
        recommendations.append("Limit employer and job-related disclosures.")

    # -------- Location Risk --------
    if detect_location(combined_text):
        breakdown["Location_Risk"] += 15
        score += 15
        risk_factors.append("Location information detected")
        recommendations.append("Avoid sharing precise location details.")

    if detect_travel(combined_text):
        breakdown["Location_Risk"] += 10
        score += 10
        risk_factors.append("Travel plans publicly shared")
        recommendations.append("Avoid announcing travel plans publicly.")

    # -------- Behavioral Risk --------
    if detect_routine(combined_text):
        breakdown["Behavioral_Risk"] += 15
        score += 15
        risk_factors.append("Routine patterns detected")
        recommendations.append("Avoid sharing predictable daily routines.")

    # -------- Emotional Risk --------
    sentiment = sentiment_score(combined_text)
    if sentiment < -0.3:
        breakdown["Emotional_Risk"] += 10
        score += 10
        risk_factors.append("Negative emotional tone detected")
        recommendations.append("Be cautious about emotional disclosures.")

    # Normalize score
    score = min(score, 100)
    score = round(score)

    # Risk Level Classification
    if score >= 70:
        risk_level = "High"
    elif score >= 40:
        risk_level = "Medium"
    else:
        risk_level = "Low"

    # Generate Risk Summary
    risk_summary = generate_risk_summary(score, breakdown)

    # --------------------------
    # Context-Aware Attack Simulation
    # --------------------------

    attack_message = "Hi,\n\n"

    if breakdown["Professional_Disclosure"] > 0:
        attack_message += "We have an urgent update regarding your company account.\n"

    if breakdown["Location_Risk"] > 0:
        attack_message += "We detected unusual activity related to your recent location updates.\n"

    if breakdown["PII_Exposure"] > 0:
        attack_message += "Please verify your registered contact details immediately.\n"

    if breakdown["Behavioral_Risk"] > 0:
        attack_message += "Your routine-based account activity requires confirmation.\n"

    attack_message += "\nFailure to act may result in account suspension.\n"
    attack_message += "\nClick here to secure your account."

    return {
        "score": score,
        "risk_level": risk_level,
        "risk_summary": risk_summary,
        "breakdown": breakdown,
        "risk_factors": risk_factors,
        "attack_simulation": attack_message.strip(),
        "recommendations": recommendations
    }