"""Download from Supabase Storage."""
from db.client import get_supabase

async def download_file(bucket: str, path: str) -> bytes:
    supabase = get_supabase()
    return supabase.storage.from_(bucket).download(path)
