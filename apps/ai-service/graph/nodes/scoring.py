"""Scoring (Generator) agent node."""
from graph.state import NeuroClassState

async def run(state: NeuroClassState) -> dict:
    rubric = state.get("rubric", {})
    artifacts = state.get("artifacts", [])
    # Score each rubric criterion using LLM
    scores = {}
    for criterion in rubric.get("criteria", []):
        scores[criterion["name"]] = {"score": 0, "justification": "Pending evaluation"}
    return {"scores": scores}
