"""NeuroClass LangGraph state definition."""
from typing import TypedDict, Optional, Annotated
from operator import add

class NeuroClassState(TypedDict):
    messages: Annotated[list, add]
    intent: Optional[str]
    course_id: Optional[str]
    student_id: Optional[str]
    project_id: Optional[str]
    rubric: Optional[dict]
    scores: Optional[dict]
    evaluation_result: Optional[dict]
    final_grade: Optional[dict]
    pedagogy_style: Optional[str]
    retrieved_chunks: Optional[list]
    artifacts: Optional[list]
    hitl_required: bool
