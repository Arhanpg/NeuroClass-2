"""pgvector cosine similarity search via Supabase RPC."""
from db.client import get_supabase

async def vector_search(query_embedding: list[float], course_id: str, match_count: int = 5) -> list[dict]:
    supabase = get_supabase()
    result = supabase.rpc("match_lecture_chunks", {"query_embedding": query_embedding, "match_count": match_count, "filter_course_id": course_id}).execute()
    return result.data or []
