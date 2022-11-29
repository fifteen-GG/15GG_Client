from datanashor.parser import ReplayClient
import sys
# import grequests
import requests
import httpx
import os
import json
import asyncio
import websockets
import time
LIVE_CLIENT_API_ROOT = 'https://127.0.0.1:2999/liveclientdata/'

replay_file_name = sys.argv[1]
match_id = replay_file_name.split('.')[0]

parser = ReplayClient(replay_file_dir='E:/Replays', game_dir='E:/Riot Games/League of Legends',
                         replay_file_name=replay_file_name)# replay_file_name=replay_name
parser.run_client()

LIVE_CLIENT_DATA_API_ROOT = 'https://127.0.0.1:2999/liveclientdata/'
player_data_keys = [
    'summonerName',
    'championName',
    'isDead',
    'level',
    'scores',
    'items',
    'team',
]


async def nashor_client():
    uri = "ws://43.201.8.37:8000/api/v1/socket/analyze"
    loaded = False
    game_time_count = 0
    prev_game_time = 0
    with open('./scripts/item.json', encoding='UTF-8') as src:
        item_dict = json.load(src)

    async with websockets.connect(uri) as websocket:
        await websocket.send(match_id)
        while True:
            time.sleep(1)
            try:
                async with httpx.AsyncClient(verify=False) as client:
                    player_data = await client.get(LIVE_CLIENT_DATA_API_ROOT + 'playerlist')
                    player_data.raise_for_status()
                    player_data = player_data.json()
                async with httpx.AsyncClient(verify=False) as client:
                    game_time = await client.get(LIVE_CLIENT_DATA_API_ROOT + 'gamestats')
                    game_time.raise_for_status()
                    game_time = game_time.json().get('gameTime')

                if not loaded:
                    loaded = True

                try:
                    current_timestamp = {
                        'timestamp': game_time,
                        'player_data': [
                            {key: champ.get(key)
                                for key in player_data_keys}
                            for champ in player_data
                        ]}

                    for player in current_timestamp['player_data']:
                        player['items'] = [
                            {
                                'itemID': item['itemID'],
                                'count': item['count']
                            } for item in player['items']
                        ]

                        player['kills'] = player['scores']['kills']
                        player['deaths'] = player['scores']['deaths']
                        player['assists'] = player['scores']['assists']

                        del player['scores']

                    print('Current time: {}'.format(game_time))

                    gold = 0
                    count = 0

                    for user in current_timestamp['player_data']:
                        gold = 0
                        count = 1
                        for item in user['items']:
                            count = item['count']
                            gold += (item_dict[str(item['itemID'])]
                                     ['gold']) * count
                        user['gold'] = gold

                    await websocket.send(json.dumps(current_timestamp, ensure_ascii=False))

                    if game_time == prev_game_time:
                        game_time_count += 1
                    else:
                        game_time_count = 0

                    if game_time_count == 3:
                        os.system(
                            "taskkill /f /im \"League of Legends.exe\"")
                        websocket.send('Game ended')
                        websocket.close()
                        break
                    prev_game_time = game_time
                except AttributeError:
                    print('Waiting for game to start')
            except Exception as e:
                if not loaded:
                    print(e)
                    print('Waiting for League client')
                else:
                    print(e)
                    break
headers = {'Content-Type': 'application/json'}
print(requests.post('http://43.201.8.37:8000/api/v1/match/update/status', json={"match_id": match_id.replace('-', '_'), "status": 1}, headers=headers ))
asyncio.run(nashor_client())
# print(requests.post('http://3.36.71.186:8000/api/v1/match/update/status', json={"match_id": match_id.replace('-', '_'), "status": 2}, headers=headers ))

# todo 앞뒤로 api 요청