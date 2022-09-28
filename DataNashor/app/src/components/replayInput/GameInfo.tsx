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

export const GameInfo = () => {
  const [RedTeamUserInfo, setRedTeamUserInfo] = useState([
    { championName: 'Lux', userName: '드레이븐1호기' },
    { championName: 'Sona', userName: '지방간' },
    { championName: 'Gangplank', userName: '아랫집김서방' },
    { championName: 'Darius', userName: '이진형' },
    { championName: 'Rumble', userName: '브랜드마크' },
  ]);
  const [BlueTeamUserInfo, setBlueTeamUserInfo] = useState([
    { championName: 'Malzahar', userName: '시험다음주' },
    { championName: 'Malphite', userName: '슈퍼섹시보이' },
    { championName: 'MissFortune', userName: '정잭영' },
    { championName: 'Soraka', userName: '지녕지뇽지녕' },
    { championName: 'Amumu', userName: '나는누구게' },
  ]);

  return (
    <ReplayPreviewWrapper sort={false}>
      <UsersInfoWrapper>
        <TeamWrapper>
          {RedTeamUserInfo.map((_, i) => {
            return (
              <UserWrapper key={i}>
                <UserImgWrapper>
                  <UserImg
                    src={formatChampion({
                      championName: `${RedTeamUserInfo[i].championName}`,
                    })}
                  />
                </UserImgWrapper>
                <UserName team={Team.RED}>
                  {RedTeamUserInfo[i].userName}
                </UserName>
              </UserWrapper>
            );
          })}
        </TeamWrapper>
        <TeamWrapper>
          {RedTeamUserInfo.map((_, i) => {
            return (
              <UserWrapper key={i}>
                <UserName team={Team.BLUE}>
                  {BlueTeamUserInfo[i].userName}
                </UserName>
                <UserImgWrapper>
                  <UserImg
                    src={formatChampion({
                      championName: `${BlueTeamUserInfo[i].championName}`,
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
