"""JSON rubric schema validation."""

def validate_rubric(rubric: dict) -> tuple[bool, list[str]]:
    errors = []
    criteria = rubric.get("criteria", [])
    if not criteria:
        errors.append("Rubric must have at least one criterion")
    total_weight = sum(c.get("weight", 0) for c in criteria)
    if abs(total_weight - 1.0) > 0.01:
        errors.append(f"Weights must sum to 1.0, got {total_weight}")
    for c in criteria:
        if not c.get("name"):
            errors.append("Each criterion must have a name")
        if c.get("max_score", 0) <= 0:
            errors.append(f"Criterion '{c.get('name')}' must have positive max_score")
    return len(errors) == 0, errors
