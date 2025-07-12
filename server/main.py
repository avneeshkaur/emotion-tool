from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# Allow frontend to access this API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class TextInput(BaseModel):
    text: str

@app.post("/analyze")
async def analyze_emotion(data: TextInput):
    # Mock emotion detection
    text = data.text.lower()
    
    if "excited" in text or "start" in text:
        return { "emotion": "Excited", "confidence": 0.92 }
    elif "nervous" in text or "interview" in text:
        return { "emotion": "Anxious", "confidence": 0.85 }
    elif "failed" in text or "terrible" in text:
        return { "emotion": "Sad", "confidence": 0.81 }
    elif "wrong" in text or "why" in text:
        return { "emotion": "Frustrated", "confidence": 0.77 }
    elif "peaceful" in text or "calm" in text:
        return { "emotion": "Relaxed", "confidence": 0.88 }
    else:
        return { "emotion": "Neutral", "confidence": 0.5 }
