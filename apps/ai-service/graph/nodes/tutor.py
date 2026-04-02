"""Pedagogical Tutor agent node."""
from graph.state import NeuroClassState
from rag.retrieval import retrieve_relevant_chunks

async def run(state: NeuroClassState) -> dict:
    course_id = state.get("course_id", "")
    messages = state.get("messages", [])
    pedagogy = state.get("pedagogy_style", "SOCRATIC")
    chunks = await retrieve_relevant_chunks(course_id, messages[-1] if messages else "")
    # Generate pedagogical response using LLM + retrieved context
    response = f"[Tutor - {pedagogy}] Based on the course materials, here is my response..."
    return {"messages": [response], "retrieved_chunks": chunks}
