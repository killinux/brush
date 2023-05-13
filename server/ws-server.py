import asyncio
import websockets

clients = set()

async def server(websocket, path):
    clients.add(websocket)
    try:
        async for message in websocket:
            await broadcast(message)
    except Exception as e:
        print(f"Exception occurred: {e}")
    finally:
        clients.remove(websocket)

#async def broadcast(message):
#    if clients:
#        await asyncio.wait([client.send(message) for client in clients])
async def broadcast(message):
    if clients:
        await asyncio.wait([asyncio.create_task(client.send(message)) for client in clients])

#start_server = websockets.serve(server, "localhost", 8765)

#asyncio.get_event_loop().run_until_complete(start_server)
#asyncio.get_event_loop().run_forever()

async def main():
    # start a websocket server
    async with websockets.serve(server, "localhost", 8765):
        await asyncio.Future()  # run forever
    asyncio.get_event_loop().run_until_complete(start_server)
    asyncio.get_event_loop().run_forever()
asyncio.run(main())

