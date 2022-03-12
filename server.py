from fastapi import FastAPI
from routers import pokemonapi, management, backend

app = FastAPI()

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(pokemonapi.router, prefix="/pokemon", tags=["pokemon"])
app.include_router(management.router, prefix="/management", tags=["management"])
app.include_router(backend.router, prefix="/backend", tags=["backend"])
