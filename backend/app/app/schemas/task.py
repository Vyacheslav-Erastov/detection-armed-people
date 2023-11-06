from datetime import datetime
from uuid import UUID
from pydantic import BaseModel

from app.models.task import TaskStatus, TaskType
from app.schemas.event import Event


class TaskBase(BaseModel):
    name: str
    type: TaskType
    status: TaskStatus
    video_titles: list[str] | None = None
    rtsp_links: list[str] | None = None
    start_time: datetime | None
    end_time: datetime | None

    class Config:
        orm_mode = True


class TaskUpdate(TaskBase):
    pass


class Task(TaskBase):
    id: UUID


class TaskCreate(Task):
    pass


class TaskDetailed(Task):
    events: list["Event"] = []
