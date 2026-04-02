"""Tests for the supervisor agent."""
import pytest
from graph.nodes.supervisor import run

@pytest.mark.asyncio
async def test_supervisor_classifies_tutor_intent():
    state = {"messages": ["Help me understand recursion"], "hitl_required": False}
    result = await run(state)
    assert result["intent"] == "tutor"

@pytest.mark.asyncio
async def test_supervisor_classifies_grade_intent():
    state = {"messages": ["Grade this submission"], "hitl_required": False}
    result = await run(state)
    assert result["intent"] == "grade"
