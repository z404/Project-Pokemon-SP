from fastapi import APIRouter

router = APIRouter()

@router.get("/uptime")
async def root():
    """
    Uptime endpoint. Returns a string to show server uptime
    """
    return {"message": "Server Online"}

@router.get("/status")
async def status():
    """
    Status endpoint. Returns a string to show server activity.
    """
    return {"message": "Server Online"}

@router.post("/log")
async def log(category: str, message: str):
    """
    Log endpoint. Returns a string to show server activity.
    """
    return {"message": "Server Online"}

