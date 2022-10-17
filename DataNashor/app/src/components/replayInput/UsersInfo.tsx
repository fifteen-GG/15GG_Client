import {
  UsersInfoWrapper,
  TeamWrapper,
  UserWrapper,
  UserImgWrapper,
  UserImg,
  UserName,
  Team,
} from './styles/gameInfo.s';

interface playerInfo {
  summonerName: string;
  championName: string;
  individualPosition: string;
  teamPosition: string;
}
interface gameInfo {
  gameVersion: string;
  red: playerInfo[];
  blue: playerInfo[];
  gameCreation: string;
}
interface propsType {
  game: gameInfo;
}

export const UsersInfo = (props: propsType) => {
  return (
    <UsersInfoWrapper>
      <TeamWrapper>
        {props.game?.red.map(({ championName, summonerName }, i) => {
          return (
            <UserWrapper key={i}>
              <UserImgWrapper>
                <UserImg
                  src={`${process.env.REACT_APP_OPGG_API_ROOT}/images/lol/champion/${championName}.png`}
                />
              </UserImgWrapper>
              <UserName team={Team.RED}>
                {summonerName.length > 3
                  ? summonerName.slice(0, 3) + '...'
                  : summonerName}
              </UserName>
            </UserWrapper>
          );
        })}
      </TeamWrapper>
      <TeamWrapper>
        {props.game?.blue.map(({ championName, summonerName }, i) => {
          return (
            <UserWrapper key={i}>
              <UserName team={Team.BLUE}>
                {summonerName.length > 3
                  ? summonerName.slice(0, 3) + '...'
                  : summonerName}
              </UserName>
              <UserImgWrapper>
                <UserImg
                  src={`${process.env.REACT_APP_OPGG_API_ROOT}/images/lol/champion/${championName}.png`}
                />
              </UserImgWrapper>
            </UserWrapper>
          );
        })}
      </TeamWrapper>
    </UsersInfoWrapper>
  );
};
