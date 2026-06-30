from fastapi import APIRouter
from pydantic import BaseModel
from services.gemini_service import prioritize_tasks

router = APIRouter()


class TaskList(BaseModel):
    tasks: list


@router.post("/ai/prioritize")
def ai_prioritize(task_list: TaskList):
    recommendation = prioritize_tasks(task_list.tasks)

    return {
        "recommendation": recommendation
    }