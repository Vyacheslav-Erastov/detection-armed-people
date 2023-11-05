from app.crud.crud_base import CRUDBase
from app.models.task import Task
from app import schemas


class CRUDTask(CRUDBase[Task, schemas.TaskCreate, schemas.TaskUpdate]):
    pass


task = CRUDTask(Task)
