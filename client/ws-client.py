import asyncio
import websockets

async def client():
    uri = "ws://localhost:8765"
    async with websockets.connect(uri) as websocket:
        await websocket.send("up")
#        async for message in websocket:
#            print(f"Received message from server: {message}")

asyncio.get_event_loop().run_until_complete(client())

