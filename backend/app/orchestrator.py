from app.services.rule_engine import run_rule_engine
from app.services.nlp_engine import run_nlp_engine
from app.services.llm_engine import run_llm_engine
from app.utils.risk_utils import classify_risk

def run_hybrid_engine(data):

    combined_text = data.bio + " " + " ".join(data.posts)

    rule_result = run_rule_engine(combined_text)
    nlp_result = run_nlp_engine(combined_text)

    total_score = rule_result["rule_score"] + nlp_result["nlp_score"]
    total_score = min(total_score, 100)

    risk_level = classify_risk(total_score)

    summary_for_llm = f"""
    Risk Score: {total_score}
    Risk Tags: {rule_result['tags'] + nlp_result['tags']}
    """

    llm_result = run_llm_engine(summary_for_llm)

    return {
        "overall_risk_score": total_score,
        "risk_level": risk_level,
        "breakdown": rule_result["breakdown"],
        "risk_tags": rule_result["tags"] + nlp_result["tags"],
        "simulated_attack": llm_result["simulated_attack"],
        "mitigation_steps": llm_result["mitigation_steps"]
    }