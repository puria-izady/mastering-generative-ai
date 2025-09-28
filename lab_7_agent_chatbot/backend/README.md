# Weather Agent Backend

A FastAPI backend with a Strands agent using Amazon Nova Pro model and a mock weather tool.

## Setup

1. Install dependencies:
```bash
uv sync
```
2. Configure AWS region and credentials: 

```bash
export AWS_DEFAULT_REGION='us-east-1'
export AWS_REGION='us-east-1'

export AWS_ACCESS_KEY_ID='your_access_key'
export AWS_SECRET_ACCESS_KEY='your_secret_key'
```

3. Run the server:
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