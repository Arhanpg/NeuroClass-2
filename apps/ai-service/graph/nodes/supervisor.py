"""Supervisor agent: intent classification and routing."""
from graph.state import NeuroClassState

async def run(state: NeuroClassState) -> dict:
    messages = state.get("messages", [])
    last_message = messages[-1] if messages else ""
    # Classify intent using LLM
    intent = "tutor"  # default
    if "grade" in str(last_message).lower(): intent = "grade"
    elif "project" in str(last_message).lower(): intent = "project"
    elif "ingest" in str(last_message).lower(): intent = "ingest"
    return {"intent": intent}
