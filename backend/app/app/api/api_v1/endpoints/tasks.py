from datetime import datetime
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app import schemas
from app import crud
from app.api import dependencies as deps

router = APIRouter()


@router.get("/", response_model=list[schemas.Task])
def read_tasks(
    db: Session = Depends(deps.get_db),
):
    tasks = crud.task.get_multi(db=db)
    return tasks


@router.post("/", response_model=schemas.Task)
def create_task(
    task_in: schemas.TaskIn = Depends(schemas.TaskIn.as_form),
    db: Session = Depends(deps.get_db),
):
    print(task_in.model_dump())
    task_create = schemas.TaskCreate(
        **task_in.model_dump(exclude_unset=True), start_time=datetime.now()
    )
    task = crud.task.create(db=db, obj_in=task_create)
    db.commit()
    return task


@router.delete("/")
def create_task(db: Session = Depends(deps.get_db)):
    tasks = crud.task.get_multi(db=db)
    for task in tasks:
        crud.task.remove(db=db, _id=schemas.Task.from_orm(task).id)
    return None
