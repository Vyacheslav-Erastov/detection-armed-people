from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app import schemas
from app import crud
from app.api import dependencies as deps

router = APIRouter()


@router.get("/", response_model=list[schemas.Event])
def read_events(
    db: Session = Depends(deps.get_db),
):
    events = crud.event.get_multi(db=db)
    return events
