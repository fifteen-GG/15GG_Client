import os
import json

game_dir = 'C:/Riot Games/League of Legends'
replay_dir = 'C:/Users/James/Documents/League of Legends/Replays'

replay_fname = 'KR-6072648122.rofl'
replay_path = os.path.join(replay_dir, replay_fname)


class MetaDataParser():

    def __init__(self, replay_file_dir):
        self.replay_file_dir = replay_file_dir

    def get_raw_metadata(self):
        # TODO dynamically set replay file name

        with open(replay_path, "rb") as file_obj:
            file_obj.seek(262)
            length_field_buffer = file_obj.read(26)
            metadata_offset = length_field_buffer[6:10]
            metadata_length = length_field_buffer[10:14]

            metadata_offset = int.from_bytes(
                metadata_offset, byteorder='little')
            metadata_length = int.from_bytes(
                metadata_length, byteorder='little')

            file_obj.seek(metadata_offset)
            replay_metadata = file_obj.read(metadata_length)
            replay_metadata = json.loads(
                str(replay_metadata, encoding="utf-8"))
            player_stats = json.loads(replay_metadata["statsJson"])
            game_length = replay_metadata['gameLength']

            return game_length, player_stats

    def parse(self, *args):
        """
        Parse the metadata of a single .rofl file
        returns (game length, player stats)

        player stat key defaults to
        ['NAME', 'SKIN', 'TEAM', INDIVIDUAL_POSITION', 'WIN']
        """
        game_length, player_stats = self.get_raw_metadata()
        metadata_keys = ['NAME', 'SKIN', 'TEAM',
                         'INDIVIDUAL_POSITION', 'WIN'] if not args else args

        result = [{key: stat.get(key)
                  for key in metadata_keys} for stat in player_stats]

        return game_length, result

