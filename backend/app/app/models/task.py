from datetime import datetime
from enum import Enum
from sqlalchemy import JSON
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.db.base_class import Base
from app.models.event import Event


class TaskType(str, Enum):
    VIDEO_DETECTION = "VIDEO_DETECTION"
    RTSP_DETECTION = "RTSP_DETECTION"


class TaskStatus(str, Enum):
    CREATED = "CREATED"
    PROCESSING = "PROCESSING"
    STOPPED = "STOPPED"
    ERROR = "ERROR"
    COMPLETED = "COMPLETED"


class Task(Base):
    __tablename__ = "tasks"
    name: Mapped[str] = mapped_column(unique=True)
    type: Mapped[TaskType]
    status: Mapped[TaskStatus]
    video_titles: Mapped[list[str] | None] = mapped_column(default=None, type_=JSON)
    rtsp_links: Mapped[list[str] | None] = mapped_column(default=None, type_=JSON)
    start_time: Mapped[datetime]
    end_time: Mapped[datetime | None] = mapped_column(default=None)
    events: Mapped[list["Event"]] = relationship(cascade="all, delete-orphan")
