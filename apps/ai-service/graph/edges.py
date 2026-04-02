"""Conditional edge routing functions."""
from graph.state import NeuroClassState

def route_by_intent(state: NeuroClassState) -> str:
    intent = state.get("intent", "tutor")
    if intent in ("tutor", "grade", "project", "ingest"):
        return intent
    return "tutor"

def should_interrupt(state: NeuroClassState) -> str:
    if state.get("hitl_required", False):
        return "interrupt"
    return "release"
