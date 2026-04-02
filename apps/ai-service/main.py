from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import logging

from config import settings

logging.basicConfig(level=settings.log_level)
logger = logging.getLogger(__name__)

app = FastAPI(
    title="NeuroClass AI Service",
    description="LangGraph-based multi-agent AI backend for NeuroClass",
    version="0.1.0",
    docs_url="/docs" if settings.environment != "production" else None,
    redoc_url=None,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://neuroclass.vercel.app"],
    allow_credentials=True,
    allow_methods=["POST", "GET"],
    allow_headers=["Authorization", "Content-Type"],
)


@app.get("/health")
async def health_check():
    """Cloud Run readiness probe."""
    return {"status": "ok", "service": "neuroclass-ai", "version": "0.1.0"}


@app.post("/invoke")
async def invoke_placeholder():
    """Phase 3: LangGraph AI Tutor invocation — to be implemented."""
    return {"message": "AI service not yet implemented. Coming in Phase 3."}


@app.post("/ingest")
async def ingest_placeholder():
    """Phase 2: RAG ingestion endpoint — to be implemented."""
    return {"message": "RAG ingestion not yet implemented. Coming in Phase 2."}


@app.post("/grade")
async def grade_placeholder():
    """Phase 5: Grading workflow — to be implemented."""
    return {"message": "Grading not yet implemented. Coming in Phase 5."}


@app.post("/resume-hitl")
async def resume_hitl_placeholder():
    """Phase 5: Resume paused HiTL grading — to be implemented."""
    return {"message": "HiTL resume not yet implemented. Coming in Phase 5."}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8080, reload=False)
