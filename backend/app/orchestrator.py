from app.services.rule_engine import run_rule_engine
from app.services.llm_engine import run_llm_engine


async def run_hybrid_engine(data):
    rule_result = run_rule_engine(data)

    llm_result = await run_llm_engine(
        data,
        rule_result["overall_risk_score"]
    )

    return {
        "overall_risk_score": rule_result["overall_risk_score"],
        "risk_level": rule_result["risk_level"],
        "breakdown": rule_result["breakdown"],
        "risk_tags": rule_result["risk_tags"],
        "simulated_attack": llm_result["simulated_attack"],
        "mitigation_steps": [
            "Enable 2FA",
            "Limit public exposure",
            "Avoid sharing travel plans publicly",
            "Review privacy settings"
        ],
    }