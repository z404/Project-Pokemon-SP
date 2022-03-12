from fastapi import APIRouter

router = APIRouter()

@router.post("/generate_display_json")
async def generate_display_json():
    """
    Generate display json endpoint. Creates display json for a user.
    TODO:
        -> Implement number of pokemon to display
        -> Randomization of pokemon
        -> Specific pokemon
    """
    return {"message": "Under construction!"}