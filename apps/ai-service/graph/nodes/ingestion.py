"""ZIP/GitHub repo parser node."""
from graph.state import NeuroClassState

async def run(state: NeuroClassState) -> dict:
    artifacts = state.get("artifacts", [])
    # Parse uploaded ZIP or clone GitHub repo, extract file tree
    return {"messages": ["Ingestion complete"], "artifacts": artifacts}
