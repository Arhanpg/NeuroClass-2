"""GitHub API: commits, diffs, file tree."""
import httpx
from config import settings

async def get_commits(owner: str, repo: str, since: str = None) -> list[dict]:
    async with httpx.AsyncClient() as client:
        headers = {"Authorization": f"token {settings.GITHUB_TOKEN}"}
        params = {"since": since} if since else {}
        res = await client.get(f"https://api.github.com/repos/{owner}/{repo}/commits", headers=headers, params=params)
        return res.json()

async def get_file_tree(owner: str, repo: str, sha: str = "HEAD") -> list[dict]:
    async with httpx.AsyncClient() as client:
        headers = {"Authorization": f"token {settings.GITHUB_TOKEN}"}
        res = await client.get(f"https://api.github.com/repos/{owner}/{repo}/git/trees/{sha}?recursive=1", headers=headers)
        return res.json().get("tree", [])

async def get_diff(owner: str, repo: str, base: str, head: str) -> str:
    async with httpx.AsyncClient() as client:
        headers = {"Authorization": f"token {settings.GITHUB_TOKEN}", "Accept": "application/vnd.github.diff"}
        res = await client.get(f"https://api.github.com/repos/{owner}/{repo}/compare/{base}...{head}", headers=headers)
        return res.text
