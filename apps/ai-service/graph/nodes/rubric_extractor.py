"""Deterministic rubric parser node."""
from graph.state import NeuroClassState

async def run(state: NeuroClassState) -> dict:
    # Parse rubric from database for the given project
    project_id = state.get("project_id", "")
    rubric = {"criteria": [], "project_id": project_id}
    return {"rubric": rubric}
