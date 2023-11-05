from fastapi import FastAPI
from app.api.api_v1.api import api_router
from app.core.config import settings
import uvicorn

app = FastAPI()

app.include_router(api_router, prefix=settings.API_V1_STR)


if "__main__" == __name__:
    uvicorn.run("main:app", reload=True, host="0.0.0.0", port=8000)
