from app.crud.crud_base import CRUDBase
from app.models.event import Event
from app import schemas


class CRUDEvent(CRUDBase[Event, schemas.EventCreate, schemas.EventUpdate]):
    pass


event = CRUDEvent(Event)
