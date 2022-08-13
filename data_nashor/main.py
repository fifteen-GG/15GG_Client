import os
import requests
import json
from time import sleep

from client import ReplayClient
from metadata import MetaDataParser


LIVE_CLIENT_API_ROOT = 'https://127.0.0.1:2999/liveclientdata/'
game_dir = 'C:/Riot Games/League of Legends'
replay_dir = 'C:/Users/James/Documents/League of Legends/Replays'
replay_files = os.listdir(replay_dir)

player_data_keys = [
    'summonerName',
    'championName',
    'isDead',
    'level',
    'scores',
    'items',
    'team',
]


def parse_replay(replay_file_name):
    client = ReplayClient(game_dir, replay_dir, replay_file_name)
    meta_data_parser = MetaDataParser(
        os.path.join(replay_dir, replay_file_name))

    client.run_client()

    result = []
    loaded = False
    game_time_count = 0
    prev_game_time = 0

    game_meta_data = meta_data_parser.parse()

    with open('meta' + replay_file_name.split('.')[0] + '.json', 'w', encoding='UTF-8') as fp:
        json.dump(game_meta_data, fp, ensure_ascii=False)

    while True:
        try:
            data = requests.get(LIVE_CLIENT_API_ROOT +
                                'playerlist/', verify=False).json()
            game_time = requests.get(
                LIVE_CLIENT_API_ROOT + 'gamestats/',
                verify=False).json().get('gameTime')

            if not loaded:
                loaded = True

            try:
                result.append({
                    'timestamp': game_time,
                    'player_data': [
                        {key: champ.get(key) for key in player_data_keys}
                        for champ in data
                    ]})
                print('Current time: ' + game_time)

                if game_time == prev_game_time:
                    game_time_count += 1
                else:
                    game_time_count = 0

                if game_time_count == 3:
                    os.system("taskkill /f /im \"League of Legends.exe\"")
                    break

                prev_game_time = game_time

            except AttributeError:
                print('Waiting for game to start')

        except requests.exceptions.ConnectionError:
            if not loaded:
                print('Waiting for League client')
            else:
                break
        sleep(0.8)

    with open('result' + replay_file_name.split('.')[0] + '.json', 'w', encoding='UTF-8') as fp:
        json.dump(result, fp, ensure_ascii=False)


def main():
    for replay_file_name in replay_files:
        print('Parsing ' + replay_file_name)
        parse_replay(replay_file_name)
        sleep(20)


if __name__ == '__main__':
    main()
