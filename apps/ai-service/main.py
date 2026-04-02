"""FastAPI application entry point for the NeuroClass AI Service."""
import uvicorn
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from config import settings

app = FastAPI(title="NeuroClass AI Service", version="0.1.0")

app.add_middleware(CORSMiddleware, allow_origins=settings.ALLOWED_ORIGINS, allow_methods=["*"], allow_headers=["*"])

@app.get("/health")
async def health():
    return {"status": "healthy", "service": "neuroclass-ai"}

@app.post("/invoke")
async def invoke_graph(payload: dict):
    """Main entry point â€” routes to LangGraph based on intent."""
    from graph.graph import run_graph
    result = await run_graph(payload)
    return result

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8080, reload=True)
