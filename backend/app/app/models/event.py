from datetime import datetime, time
from enum import Enum
from uuid import UUID
from sqlalchemy import ForeignKey
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base_class import Base


class Event(Base):
    __tablename__ = "events"
    event_path: Mapped[str]
    video_title: Mapped[str] = mapped_column(default=None)
    rtsp_link: Mapped[str] = mapped_column(default=None)
    rtsp_time: Mapped[datetime] = mapped_column(default=None)
    video_time: Mapped[time] = mapped_column(default=None)
    task_id: Mapped[UUID] = mapped_column(ForeignKey("tasks.id"))
