import os
from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    API_V1_STR: str = "/api/v1"
    SQLALCHEMY_DATABASE_URI: str = "postgresql://postgres:postgres@localhost:5432/app"
    WORKING_DIRECTORY: str = os.path.join(os.getcwd(), "app")


settings = Settings()
