"""PDF/Markdown chunking, embedding, and pgvector insert."""
from pypdf import PdfReader
from db.client import get_supabase

def chunk_text(text: str, chunk_size: int = 1000, overlap: int = 200) -> list[str]:
    chunks = []
    for i in range(0, len(text), chunk_size - overlap):
        chunks.append(text[i:i + chunk_size])
    return chunks

async def ingest_pdf(file_path: str, course_id: str, lecture_id: str) -> int:
    reader = PdfReader(file_path)
    full_text = "\n".join(page.extract_text() or "" for page in reader.pages)
    chunks = chunk_text(full_text)
    supabase = get_supabase()
    for i, chunk in enumerate(chunks):
        # Generate embedding via Google Generative AI
        # embedding = await generate_embedding(chunk)
        supabase.table("lecture_chunks").insert({"content": chunk, "course_id": course_id, "lecture_id": lecture_id, "chunk_index": i}).execute()
    return len(chunks)

async def ingest_markdown(content: str, course_id: str, lecture_id: str) -> int:
    chunks = chunk_text(content)
    supabase = get_supabase()
    for i, chunk in enumerate(chunks):
        supabase.table("lecture_chunks").insert({"content": chunk, "course_id": course_id, "lecture_id": lecture_id, "chunk_index": i}).execute()
    return len(chunks)
