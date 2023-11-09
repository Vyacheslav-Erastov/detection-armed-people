import time

# from app.db.session import SessionLocal
from app.api.dependencies import get_db
from app import crud
from backend.app.app import schemas
from backend.app.app.models.task import TaskStatus


class BaseDetector:
    def __init__(self, task_id, rtsp_links) -> None:
        self._task_id = task_id
        self._rtsp_links = rtsp_links
        self._db = get_db()

    def perform_detection(self):
        print("ok")
        time.sleep(10)
        task = crud.task.update(
            db=self._db,
            obj_in=schemas.TaskUpdate(status=TaskStatus.COMPLETED),
            _id=self._task_id,
        )
