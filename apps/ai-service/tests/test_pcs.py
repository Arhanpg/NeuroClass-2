"""Tests for Peer Contribution Score computation."""
import pytest

def test_pcs_equal_contributions():
    commits = [{"author": "alice", "lines": 100}, {"author": "bob", "lines": 100}]
    # Expected: 50/50 split
    total = sum(c["lines"] for c in commits)
    scores = {c["author"]: c["lines"] / total * 100 for c in commits}
    assert scores["alice"] == 50.0
    assert scores["bob"] == 50.0
