"""Tests for the grading pipeline."""
import pytest
from graph.nodes.aggregation import run
from tools.rubric_validator import validate_rubric

def test_rubric_validation_valid():
    rubric = {"criteria": [{"name": "Code Quality", "description": "...", "max_score": 100, "weight": 0.5}, {"name": "Documentation", "description": "...", "max_score": 100, "weight": 0.5}]}
    valid, errors = validate_rubric(rubric)
    assert valid
    assert len(errors) == 0

def test_rubric_validation_bad_weights():
    rubric = {"criteria": [{"name": "A", "description": "", "max_score": 100, "weight": 0.3}, {"name": "B", "description": "", "max_score": 100, "weight": 0.3}]}
    valid, errors = validate_rubric(rubric)
    assert not valid

@pytest.mark.asyncio
async def test_aggregation_calculates_total():
    state = {"scores": {"Code": {"score": 80}}, "rubric": {"criteria": [{"name": "Code", "weight": 1.0}]}, "hitl_required": False}
    result = await run(state)
    assert result["final_grade"]["total"] == 80.0
