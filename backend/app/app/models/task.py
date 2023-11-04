from datetime import datetime
from enum import Enum
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.db.base_class import Base
from app.models.event import Event


class TaskType(str, Enum):
    VIDEO_DETECTION = "VIDEO_DETECTION"
    RTSP_DETECTION = "RTSP_DETECTION"


class Task(Base):
    __tablename__ = "tasks"
    name: Mapped[str] = mapped_column(unique=True)
    type: Mapped[TaskType]
    video_titles: Mapped[list[str]] = mapped_column(default=None)
    rtsp_links: Mapped[list[str]] = mapped_column(default=None)
    start_time: Mapped[datetime]
    end_time: Mapped[datetime]
    events: Mapped[list["Event"]] = relationship(cascade="all, delete-orphan")
