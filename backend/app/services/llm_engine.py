import ollama
import json


async def run_llm_engine(data, risk_score):
    try:
        # 🔥 Adaptive threat type
        if risk_score > 60:
            threat_type = "advanced targeted spear phishing and lateral movement attack"
        elif risk_score > 30:
            threat_type = "moderate social engineering attack"
        else:
            threat_type = "low-level phishing attempt"

        prompt = f"""
You are a cybersecurity threat simulation AI.

User Risk Score: {risk_score}

Simulate a {threat_type} scenario based on:

User Bio:
{data.bio}

User Posts:
{" ".join(data.posts)}

Respond ONLY in valid JSON format:

{{
  "attack_vector": "",
  "impact": "",
  "severity": "",
  "recommendations": ""
}}

Do not add explanations outside JSON.
"""

        response = ollama.chat(
            model="llama3",
            messages=[{"role": "user", "content": prompt}]
        )

        content = response["message"]["content"]

        try:
            structured_output = json.loads(content)
        except:
            structured_output = {
                "attack_vector": content,
                "impact": "Unable to parse structured impact.",
                "severity": "Unknown",
                "recommendations": "Review security settings."
            }

        # 🔥 Align severity with deterministic score
        if risk_score > 60:
            structured_output["severity"] = "High"
        elif risk_score > 30:
            structured_output["severity"] = "Medium"
        else:
            structured_output["severity"] = "Low"

        return {
            "simulated_attack": structured_output
        }

    except Exception as e:
        print("🚨 OLLAMA ERROR:", e)
        return {
            "simulated_attack": {
                "attack_vector": "LLM generation failed.",
                "impact": "Unavailable",
                "severity": "Unknown",
                "recommendations": "Check LLM configuration."
            }
        }