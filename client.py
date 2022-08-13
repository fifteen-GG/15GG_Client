import subprocess

game_dir = 'C:/Riot Games/League of Legends'
replay_dir = 'C:/Users/James/Documents/League of Legends/Replays'


class ReplayClient():
    """
    League of Legend replay Client class

    Opens a League of Legends client

    """

    def __init__(self, game_dir, replay_dir):
        self.game_dir = game_dir
        self.replay_dir = replay_dir

    def run_client(self):
        subprocess.Popen(
            [
                self.game_dir + '/Game/League of Legends.exe',
                # TODO dynamically get replay file name
                self.replay_dir + '/KR-6072648122.rofl',
                '-GameBaseDir=' + self.game_dir,
                '-Region=KR',  # TODO set region dynamically
                '-PlatformID=KR',
                '-Locale=ko_KR',
                '-SkipBuild',
                '-EnableCrashpad=true',
                '-EnableLNP',
                '-UseDX11=1:1',
                '-UseMetal=0:1',
                '-UseNewX3D',
                '-UseNewX3DFramebuffers',
            ],
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            cwd=game_dir + r'\Game'
        )
