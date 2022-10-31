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


def main():
    # add game_dir if Riot Client is not installed in default location
    parser = ReplayParser()
    metadata = parser.get_client_metadata()

    res = requests.get(
        url='http://3.38.169.77:8000/api/v1/train_game'
    )

    replay_list = res.json()

    for replay in replay_list:
        replay_name = replay['match_id'].split('-')[1]
        print(replay_name)
        if replay_name.strip()[-1] == '3' or replay_name.strip()[-1] == '4':
            download_replay(metadata['port'], metadata['token'], replay_name)


# download scheduling for every 6 hours
for i in ["06:00", "12:00", "18:00", "00:00"]:
    schedule.every().day.at(i).do(main, './game_list.json')

while True:
    schedule.run_pending()
    time.sleep(1)
