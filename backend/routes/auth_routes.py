from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()


class LoginRequest(BaseModel):
    email: str
    password: str


@router.post("/login")
def login(user: LoginRequest):

    if (
        user.email == "demo@taskpilot.com"
        and user.password == "taskpilot123"
    ):
        return {
            "success": True,
            "message": "Login Successful",
            "user": {
                "name": "Demo User",
                "email": user.email,
            },
        }

    return {
        "success": False,
        "message": "Invalid Email or Password",
    }