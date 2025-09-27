from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from strands import Agent, tool
from strands.models import BedrockModel
import random
import asyncio
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@tool
def get_weather(city: str) -> str:
    """Get current weather for a city.
    Args:
        city (str): The city name to get weather for.
    Returns:
        str: Weather information for the city.
    """
    conditions = ["sunny", "cloudy", "rainy", "snowy", "foggy"]
    temp = random.randint(-10, 35)
    condition = random.choice(conditions)
    return f"Weather in {city}: {condition}, {temp}°C"

# Create agent with Nova Pro model
try:
    model = BedrockModel(
        model_id="us.amazon.nova-pro-v1:0"
    )
    
    agent = Agent(
        model=model,
        system_prompt="You are a helpful weather assistant. Use the weather tool to provide current weather information.",
        tools=[get_weather]
    )
    logger.info("Agent initialized successfully")
except Exception as e:
    logger.error(f"Failed to initialize agent: {str(e)}")
    # Create a fallback agent or handle the error appropriately
    agent = None

class ChatRequest(BaseModel):
    message: str

class ChatResponse(BaseModel):
    response: str

@app.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    try:
        if agent is None:
            raise HTTPException(status_code=503, detail="Agent not initialized. Please check AWS credentials and configuration.")
        
        logger.info(f"Received chat request: {request.message}")
        
        # Run the agent in a thread pool to avoid blocking
        loop = asyncio.get_event_loop()
        response = await loop.run_in_executor(None, agent, request.message)
        
        logger.info(f"Agent response: {response}")
        return ChatResponse(response=str(response))
    
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error processing chat request: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Internal server error: {str(e)}")

@app.get("/health")
async def health():
    return {
        "status": "healthy",
        "agent_initialized": agent is not None
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)