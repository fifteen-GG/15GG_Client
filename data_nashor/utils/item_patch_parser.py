import json


def item_patch_parser(src_dir, dest_dir):
    with open(src_dir, encoding='UTF-8') as item_list:
        src = json.load(item_list)

    item_dict = dict()
    data = src['data']

    for item_id in data.keys():
        item_dict[item_id] = {'name': data[item_id]
                              ['name'], 'gold': data[item_id]['gold']['total']}

    with open(dest_dir, 'w', encoding='UTF-8') as dest:
        json.dump(item_dict, dest, ensure_ascii=False)
