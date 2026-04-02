"""Tests for the tutor agent."""
import pytest
from graph.nodes.tutor import run

@pytest.mark.asyncio
async def test_tutor_returns_response():
    state = {"messages": ["Explain binary search"], "course_id": "test-course", "pedagogy_style": "SOCRATIC", "hitl_required": False}
    result = await run(state)
    assert "messages" in result
    assert len(result["messages"]) > 0
