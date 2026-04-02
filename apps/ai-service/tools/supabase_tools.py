"""Supabase read/write tools."""
from db.client import get_supabase

async def read_table(table: str, filters: dict = None, limit: int = 100) -> list[dict]:
    supabase = get_supabase()
    query = supabase.table(table).select("*").limit(limit)
    if filters:
        for key, value in filters.items():
            query = query.eq(key, value)
    return query.execute().data or []

async def write_table(table: str, data: dict) -> dict:
    supabase = get_supabase()
    return supabase.table(table).insert(data).execute().data
