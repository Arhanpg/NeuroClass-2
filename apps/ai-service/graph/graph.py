"""Main LangGraph StateGraph construction."""
from langgraph.graph import StateGraph, END
from graph.state import NeuroClassState
from graph.nodes import supervisor, tutor, scoring, evaluation, aggregation, hitl_interrupt, grade_release, rubric_extractor, ingestion, project_manager
from graph.edges import route_by_intent, should_interrupt

def build_graph() -> StateGraph:
    g = StateGraph(NeuroClassState)
    g.add_node("supervisor", supervisor.run)
    g.add_node("tutor", tutor.run)
    g.add_node("project_manager", project_manager.run)
    g.add_node("rubric_extractor", rubric_extractor.run)
    g.add_node("ingestion", ingestion.run)
    g.add_node("scoring", scoring.run)
    g.add_node("evaluation", evaluation.run)
    g.add_node("aggregation", aggregation.run)
    g.add_node("hitl_interrupt", hitl_interrupt.run)
    g.add_node("grade_release", grade_release.run)
    g.set_entry_point("supervisor")
    g.add_conditional_edges("supervisor", route_by_intent, {"tutor": "tutor", "grade": "rubric_extractor", "project": "project_manager", "ingest": "ingestion"})
    g.add_edge("rubric_extractor", "scoring")
    g.add_edge("scoring", "evaluation")
    g.add_edge("evaluation", "aggregation")
    g.add_conditional_edges("aggregation", should_interrupt, {"interrupt": "hitl_interrupt", "release": "grade_release"})
    g.add_edge("hitl_interrupt", "grade_release")
    g.add_edge("grade_release", END)
    g.add_edge("tutor", END)
    g.add_edge("project_manager", END)
    g.add_edge("ingestion", END)
    return g

graph = build_graph()

async def run_graph(payload: dict) -> dict:
    compiled = graph.compile()
    result = await compiled.ainvoke({"messages": [payload.get("message", "")], "course_id": payload.get("courseId"), "hitl_required": False})
    return {"response": result.get("messages", [""])[-1], "state": result}
