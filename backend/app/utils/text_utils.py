import re

def extract_emails(text: str):
    return re.findall(r"\S+@\S+", text)

def extract_phones(text: str):
    return re.findall(r"\b\d{10}\b", text)

def contains_keywords(text: str, keywords: list):
    return [word for word in keywords if word in text.lower()]