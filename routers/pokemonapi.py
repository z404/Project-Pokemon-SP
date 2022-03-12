from fastapi import APIRouter

router = APIRouter()

@router.post("/create_model/")
async def get_pokemon(username: str):
    """
    Create model for user, given their username
    """
    return {"message": "Under construction!"}

@router.post("/predict/")
async def predict_pokemon(username: str, pokemon_id: int):
    """
    Predict pokemon for user, given their username and a pokemon's ID
    """
    return {"message": "Under construction!"}

@router.post("/predict_all/")
async def predict_all_pokemon(username: str):
    """
    Predict all pokemon for user, given their username
    """
    return {"message": "Under construction!"}

@router.post("/prediction_response/")
async def predict_response(username: str, pokemon_id: int, sp_result_ml: bool, sp_user: bool):
    """
    Given username and pokemon ID, return whether the user's prediction was correct.
    If the user's prediction was not correct, retrain the model to improve accuracy.
    """
    return {"message": "Under construction!"}