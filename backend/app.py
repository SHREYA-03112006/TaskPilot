from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.auth_routes import router as auth_router

from routes.task_routes import router as task_router
from routes.ai_routes import router as ai_router


app = FastAPI(
    title="TaskPilot API",
    version="1.0.0"
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],      # React frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Home Route
@app.get("/")
def home():
    return {
        "message": "Welcome to TaskPilot API 🚀"
    }

# Register Routes
app.include_router(task_router)
app.include_router(ai_router)
app.include_router(auth_router)