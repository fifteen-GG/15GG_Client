import { ReplayPreviewWrapper } from './styles/replayPreview.s';
import {
  UsersInfoWrapper,
  TeamWrapper,
  UserWrapper,
  UserImgWrapper,
  UserImg,
  UserName,
} from './styles/gameInfo.s';
import { useState } from 'react';

export const formatChampion = (data: { championName: string }) => {
  return `https://opgg-static.akamaized.net/images/lol/champion/${data.championName}.png`;
};

export const GameInfo = () => {
  const [RedTeamUserinfo, setRedTeamUserinfo] = useState([{}, {}, {}, {}, {}]);

  return (
    <ReplayPreviewWrapper sort={false}>
      <UsersInfoWrapper>
        <TeamWrapper>
          {RedTeamUserinfo.map((_, i) => {
            return (
              <UserWrapper key={i}>
                <UserImgWrapper>
                  <UserImg src={formatChampion({ championName: 'Sona' })} />
                </UserImgWrapper>
                <UserName>드레이븐{i + 1}호기</UserName>
              </UserWrapper>
            );
          })}
        </TeamWrapper>
        <TeamWrapper>
          {RedTeamUserinfo.map((_, i) => {
            return (
              <UserWrapper key={i}>
                <UserName>드레이븐{i + 1}호기</UserName>
                <UserImgWrapper>
                  <UserImg src={formatChampion({ championName: 'Sona' })} />
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
