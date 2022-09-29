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
import { useState } from 'react';

export const formatChampion = (data: { championName: string }) => {
  return `https://opgg-static.akamaized.net/images/lol/champion/${data.championName}.png`;
};
interface userData {
  name: string;
  champion: string;
}
interface gameData {
  redTeam: userData[];
  blueTeam: userData[];
}

export const GameInfo = () => {
  const [game, setGame] = useState<gameData>({
    redTeam: [
      { name: '정잭영...', champion: 'Aatrox' },
      { name: '정잭일...', champion: 'Trundle' },
      { name: '정잭이...', champion: 'Azir' },
      { name: '정잭삼...', champion: 'Zeri' },
      { name: '정잭사...', champion: 'Yuumi' },
    ],
    blueTeam: [
      { name: '정잭오...', champion: 'Kalista' },
      { name: '정잭육...', champion: 'Amumu' },
      { name: '정잭칠...', champion: 'Sejuani' },
      { name: '정잭팔...', champion: 'Graves' },
      { name: '정잭구...', champion: 'Galio' },
    ],
  });

  return (
    <ReplayPreviewWrapper sort={false}>
      <UsersInfoWrapper>
        <TeamWrapper>
          {game.redTeam.map((_, i) => {
            return (
              <UserWrapper key={i}>
                <UserImgWrapper>
                  <UserImg
                    src={formatChampion({
                      championName: `${game.redTeam[i].champion}`,
                    })}
                  />
                </UserImgWrapper>
                <UserName team={Team.RED}>{game.blueTeam[i].name}</UserName>
              </UserWrapper>
            );
          })}
        </TeamWrapper>
        <TeamWrapper>
          {game.blueTeam.map((_, i) => {
            return (
              <UserWrapper key={i}>
                <UserName team={Team.BLUE}>{game.blueTeam[i].name}</UserName>
                <UserImgWrapper>
                  <UserImg
                    src={formatChampion({
                      championName: `${game.blueTeam[i].champion}`,
                    })}
                  />
                </UserImgWrapper>
              </UserWrapper>
            );
          })}
        </TeamWrapper>
      </UsersInfoWrapper>
      2022-09-11 · 패치 12.17
    </ReplayPreviewWrapper>
  );
};
