import requests
import time
import json
import schedule
from datanashor.parser import ReplayParser

def download_replay(port, token, gameId):
    url = f"https://127.0.0.1:{port}/lol-replays/v1/rofls/{gameId}/download"
    print('tok:', token, gameId)
    req = requests.post(
        url=url,
        headers={
            "Authorization": f"Basic {token}",
            "Content-Type": "application/json"
        },
        data=json.dumps({
            "gameId": gameId
        }),
        verify=False
    )
    print('downloading:', url, gameId)
    time.sleep(0.25)
    print("CODE:", req.status_code, req.content)
    return req


def main(json_path):
    parser = ReplayParser() # add game_dir if Riot Client is not installed in default location
    res = parser.get_client_metadata()

    with open(json_path, 'r') as file:
        replay_list = json.load(file)

    for replay in replay_list['match_id']:
        replay_name = replay.split('-')[1]
        if replay_name.strip()[-1] == '3' or replay_name.strip()[-1] == '4':
            download_replay(res['port'], res['token'], replay_name)

# download scheduling for every 6 hours
for i in ["06:00", "12:00", "18:00", "00:00"]:
    schedule.every().day.at(i).do(main, './game_list.json')

while True:
    schedule.run_pending()
    time.sleep(1)