"""LangGraph checkpointer backed by Supabase Postgres."""
from db.client import get_supabase

class SupabaseCheckpointer:
    """Custom LangGraph checkpointer that persists state to Supabase."""

    def __init__(self):
        self.supabase = get_supabase()

    async def get(self, thread_id: str) -> dict | None:
        result = self.supabase.table("checkpointer").select("*").eq("thread_id", thread_id).order("created_at", desc=True).limit(1).execute()
        return result.data[0]["state"] if result.data else None

    async def put(self, thread_id: str, state: dict) -> None:
        self.supabase.table("checkpointer").insert({"thread_id": thread_id, "state": state}).execute()
