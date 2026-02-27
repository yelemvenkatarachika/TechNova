from google import genai
from app.config import GEMINI_API_KEY


def run_llm_engine(summary_text: str):

    if not GEMINI_API_KEY:
        return {
            "simulated_attack": "Gemini API key not configured.",
            "mitigation_steps": ["Configure GEMINI_API_KEY in .env"]
        }

    try:
        client = genai.Client(api_key=GEMINI_API_KEY)

        response = client.models.generate_content(
            model="gemini-1.5-flash",
            contents=f"""
            You are a cybersecurity AI analyst.

            Generate:
            1. A realistic spear-phishing email.
            2. How attacker exploits the data.
            3. 3 mitigation steps.

            Data:
            {summary_text}
            """
        )

        return {
            "simulated_attack": response.text,
            "mitigation_steps": [
                "Enable 2FA",
                "Avoid sharing routines publicly",
                "Verify suspicious emails"
            ]
        }

    except Exception as e:
        print("🚨 GEMINI ERROR:", e)
        return {
            "simulated_attack": "LLM generation failed.",
            "mitigation_steps": ["Enable 2FA", "Limit public exposure"]
        }