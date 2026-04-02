"""Weighted score calculation node."""
from graph.state import NeuroClassState

async def run(state: NeuroClassState) -> dict:
    scores = state.get("scores", {})
    rubric = state.get("rubric", {})
    total = 0.0
    for criterion in rubric.get("criteria", []):
        weight = criterion.get("weight", 0)
        score = scores.get(criterion["name"], {}).get("score", 0)
        total += score * weight
    hitl_required = total < 50 or total > 95  # Flag edge cases for review
    return {"final_grade": {"total": round(total, 2), "scores": scores}, "hitl_required": hitl_required}
