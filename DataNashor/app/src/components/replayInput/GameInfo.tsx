import { ReplayPreviewWrapper } from './styles/replayPreview.s';
import {
  UsersInfoWrapper,
  TeamWrapper,
  UserWrapper,
  UserImgWrapper,
  UserImg,
  UserName,
  Team,
} from './styles/gameInfo.s';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const formatChampion = (data: { championName: string }) => {
  return `https://opgg-static.akamaized.net/images/lol/champion/${data.championName}.png`;
};

interface userData {
  summonerName: string;
  championName: string;
  individualPosition: string;
  teamPosition: string;
}
interface gameData {
  gameVersion: string;
  red: userData[];
  blue: userData[];
  gameCreation: string;
}
interface fileData {
  fileName: string;
}

export const GameInfo = (props: fileData) => {
  async function getData() {
    try {
      //응답 성공
      const response = await axios.get(
        'http://3.38.169.77:8000/api/v1/riot/match/preview/' +
          `${props.fileName.replace('.rofl', '')}`,
      );
      setGame(response.data as gameData);
      console.log(response);
    } catch (error) {
      //응답 실패
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
    console.log(game);
  }, [props.fileName]);

  const red = [];

  const [game, setGame] = useState<gameData>();

  return (
    <ReplayPreviewWrapper sort={false}>
      <UsersInfoWrapper>
        <TeamWrapper>
          {game?.red.map((_, i) => {
            return (
              <UserWrapper key={i}>
                <UserImgWrapper>
                  <UserImg
                    src={formatChampion({
                      championName: `${game.red[i].championName}`,
                    })}
                  />
                </UserImgWrapper>
                <UserName team={Team.RED}>{game.red[i].summonerName}</UserName>
              </UserWrapper>
            );
          })}
        </TeamWrapper>
        <TeamWrapper>
          {game?.blue.map((_, i) => {
            return (
              <UserWrapper key={i}>
                <UserName team={Team.BLUE}>
                  {game.blue[i].summonerName}
                </UserName>
                <UserImgWrapper>
                  <UserImg
                    src={formatChampion({
                      championName: `${game.blue[i].championName}`,
                    })}
                  />
                </UserImgWrapper>
              </UserWrapper>
            );
          })}
        </TeamWrapper>
      </UsersInfoWrapper>
      {game?.gameCreation} · 패치 {game?.gameVersion}
    </ReplayPreviewWrapper>
  );
};
