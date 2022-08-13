import json

with open('sample.json', encoding='UTF-8') as src:
    source = json.load(src)
with open('item.json', encoding='UTF-8') as src:
    item_dict = json.load(src)

item_list = list()
gold = int()

for item in source['items']:
    item_list.append(item['itemID'])

for item in item_list:
    if(str(item) in item_dict) :
        gold += item_dict[str(item)]['gold']

source['gold'] = gold

with open('result.json', 'w', encoding='UTF-8') as src:
    json.dump(source, src, ensure_ascii=False)