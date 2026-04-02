from pydantic_settings import BaseSettings
from functools import lru_cache


class Settings(BaseSettings):
    # Supabase
    supabase_url: str = ""
    supabase_service_role_key: str = ""
    supabase_db_url: str = ""

    # OpenAI
    openai_api_key: str = ""

    # Google Gemini
    gemini_api_key: str = ""

    # GitHub
    github_token: str = ""

    # LangSmith (observability)
    langsmith_api_key: str = ""
    langsmith_project: str = "neuroclass"

    # App
    environment: str = "development"
    log_level: str = "INFO"
    cloud_run_url: str = ""

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"
        case_sensitive = False


@lru_cache()
def get_settings() -> Settings:
    """
    In production (Cloud Run), values are injected via Secret Manager env vars.
    In local dev, they come from the .env file.
    """
    return Settings()


settings = get_settings()
