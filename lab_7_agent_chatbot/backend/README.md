# Weather Agent Backend

A FastAPI backend with a Strands agent using Amazon Nova Pro model and a mock weather tool.

## Setup

1. Install dependencies:
```bash
uv sync
```

2. Run the server:
```bash
uv run python main.py
```

The server will start on `http://localhost:8000`

## API Endpoints

- `POST /chat` - Send a message to the weather agent
- `GET /health` - Health check endpoint

## Example Usage

```bash
curl -X POST "http://localhost:8000/chat" \
     -H "Content-Type: application/json" \
     -d '{"message": "What is the weather in New York?"}'
```