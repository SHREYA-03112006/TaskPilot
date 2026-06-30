from models.task import Task

# In-memory storage
tasks = []

# Get all tasks
def get_all_tasks():
    return tasks

# Add a new task
def add_task(task: Task):
    task.id = len(tasks) + 1
    tasks.append(task)
    return task

# Update an existing task
def update_task(task_id: int, updated_task: Task):
    for index, task in enumerate(tasks):
        if task.id == task_id:
            tasks[index] = updated_task
            return updated_task
    return None

# Delete a task
def delete_task(task_id: int):
    for task in tasks:
        if task.id == task_id:
            tasks.remove(task)
            return {"message": "Task deleted successfully"}
    return {"message": "Task not found"}