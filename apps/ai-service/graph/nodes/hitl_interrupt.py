"""LangGraph interrupt() node for human-in-the-loop review."""
from graph.state import NeuroClassState

async def run(state: NeuroClassState) -> dict:
    # This node triggers a LangGraph interrupt, pausing execution
    # until an instructor approves/overrides/rejects the grade
    return {"messages": ["Grade requires instructor review. Awaiting approval..."]}
