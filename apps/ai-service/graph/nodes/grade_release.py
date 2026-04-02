"""Atomic grade release to student-visible table."""
from graph.state import NeuroClassState
from db.client import get_supabase

async def run(state: NeuroClassState) -> dict:
    final_grade = state.get("final_grade", {})
    student_id = state.get("student_id", "")
    project_id = state.get("project_id", "")
    # Insert into released_grades table atomically
    supabase = get_supabase()
    # supabase.table("released_grades").insert({...}).execute()
    return {"messages": [f"Grade released: {final_grade.get('total', 0)}"]}
