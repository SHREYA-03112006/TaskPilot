from typing import Optional
from pydantic import BaseModel

class Task(BaseModel):
    id: Optional[int] = None
    title: str
    description: str
    priority: str
    deadline: str
    status: str = "Pending"