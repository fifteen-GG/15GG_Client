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
import { urlGameData, urlChampion } from '../utils/Url';

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
        urlGameData(props.fileName.replace('.rofl', '')),
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

  const [game, setGame] = useState<gameData>();

  return (
    <ReplayPreviewWrapper sort={false}>
      <UsersInfoWrapper>
        <TeamWrapper>
          {game?.red.map((_, i) => {
            return (
              <UserWrapper key={i}>
                <UserImgWrapper>
                  <UserImg src={urlChampion(game.red[i].championName)} />
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
                  <UserImg src={urlChampion(game.blue[i].championName)} />
                </UserImgWrapper>
              </UserWrapper>
            );
          })}
        </TeamWrapper>
      </UsersInfoWrapper>
      {game?.gameCreation.slice(0, 10)} · 패치 {game?.gameVersion.slice(0, 5)}
    </ReplayPreviewWrapper>
  );
};
