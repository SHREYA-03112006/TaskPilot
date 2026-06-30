from fastapi import APIRouter
from models.task import Task
from services.task_service import (
    get_all_tasks,
    add_task,
    update_task,
    delete_task
)

router = APIRouter()

@router.get("/tasks")
def get_tasks():
    return get_all_tasks()

@router.post("/tasks")
def create_task(task: Task):
    return add_task(task)

@router.put("/tasks/{task_id}")
def edit_task(task_id: int, task: Task):
    updated = update_task(task_id, task)

    if updated:
        return updated

    return {"message": "Task not found"}

@router.delete("/tasks/{task_id}")
def remove_task(task_id: int):
    return delete_task(task_id)