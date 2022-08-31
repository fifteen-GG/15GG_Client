import json
import requests


def item_patch_parser(patch_num, dest_dir):
    patch = patch_num
    url = requests.get(
        f'https://ddragon.leagueoflegends.com/cdn/{patch_num}/data/ko_KR/item.json')
    text = url.text
    src = json.loads(text)
    item_dict = dict()
    data = src['data']

    for item_id in data.keys():
        item_dict[item_id] = {'name': data[item_id]
                              ['name'], 'gold': data[item_id]['gold']['total']}

    with open(dest_dir, 'w', encoding='UTF-8') as dest:
        json.dump(item_dict, dest, ensure_ascii=False)
