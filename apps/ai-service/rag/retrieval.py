"""Top-K chunk retrieval for Tutor agent."""
from db.client import get_supabase

async def retrieve_relevant_chunks(course_id: str, query: str, top_k: int = 5) -> list[dict]:
    supabase = get_supabase()
    # Generate query embedding, then call pgvector RPC
    # result = supabase.rpc("match_lecture_chunks", {...}).execute()
    return []
