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
        "engineer", "developer", "manager", "analyst",
        "company", "inc", "ltd", "corp", "technologies"
    ]
    return any(word in text.lower() for word in keywords)

def detect_location(text):
    locations = [
        "new york", "london", "paris",
        "hyderabad", "bangalore", "mumbai", "delhi"
    ]
    return any(loc in text.lower() for loc in locations)

def detect_travel(text):
    travel_words = [
        "flight", "trip", "vacation",
        "airport", "travel", "leaving for"
    ]
    return any(word in text.lower() for word in travel_words)

def sentiment_score(text):
    score = sia.polarity_scores(text)
    return score["compound"]

# --------------------------
# Main Analysis Function
# --------------------------

def analyze_profile(bio, posts):

    combined_text = bio + " " + " ".join(posts)

    score = 0
    breakdown = {}
    risk_factors = []
    recommendations = []

    # Email Exposure
    if detect_email(combined_text):
        score += 30
        breakdown["Email Exposure"] = 30
        risk_factors.append("Public email detected")
        recommendations.append("Avoid posting your email publicly.")

    # Phone Exposure
    if detect_phone(combined_text):
        score += 20
        breakdown["Phone Exposure"] = 20
        risk_factors.append("Phone number detected")
        recommendations.append("Remove phone numbers from public profiles.")

    # Employer Disclosure
    if detect_employer(combined_text):
        score += 15
        breakdown["Employer Disclosure"] = 15
        risk_factors.append("Employer information found")
        recommendations.append("Limit public mention of employer.")

    # Location Disclosure
    if detect_location(combined_text):
        score += 15
        breakdown["Location Disclosure"] = 15
        risk_factors.append("Location information detected")
        recommendations.append("Avoid sharing precise location details.")

    # Travel Exposure
    if detect_travel(combined_text):
        score += 10
        breakdown["Travel Exposure"] = 10
        risk_factors.append("Travel activity detected")
        recommendations.append("Avoid announcing travel plans publicly.")

    # Emotional Vulnerability
    sentiment = sentiment_score(combined_text)
    if sentiment < -0.3:
        score += 10
        breakdown["Emotional Vulnerability"] = 10
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

    # --------------------------
    # Dynamic Attack Simulation
    # --------------------------

    email_detected = detect_email(combined_text)
    employer_detected = detect_employer(combined_text)
    location_detected = detect_location(combined_text)

    attack_message = "Hi,\n\n"

    if employer_detected:
        attack_message += "We have an urgent update regarding your company account.\n"

    if location_detected:
        attack_message += "We detected unusual login activity from your recent location.\n"

    if email_detected:
        attack_message += "Please verify your registered email immediately.\n"

    attack_message += "\nFailure to act may result in account suspension.\n"
    attack_message += "\nClick here to secure your account."

    return {
        "score": score,
        "risk_level": risk_level,
        "breakdown": breakdown,
        "risk_factors": risk_factors,
        "attack_simulation": attack_message.strip(),
        "recommendations": recommendations
    }