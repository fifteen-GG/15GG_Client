import {
  UsersInfoWrapper,
  TeamWrapper,
  UserWrapper,
  UserImgWrapper,
  UserImg,
  UserName,
  Team,
} from './styles/gameInfo.s';
import { urlChampion } from '../utils/Url';

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
interface propsType {
  game: gameData;
}

export const UsersInfo = (props: propsType) => {
  return (
    <UsersInfoWrapper>
      <TeamWrapper>
        {props.game?.red.map((_, i) => {
          return (
            <UserWrapper key={i}>
              <UserImgWrapper>
                <UserImg src={urlChampion(props.game.red[i].championName)} />
              </UserImgWrapper>
              <UserName team={Team.RED}>
                {props.game.red[i].summonerName}
              </UserName>
            </UserWrapper>
          );
        })}
      </TeamWrapper>
      <TeamWrapper>
        {props.game?.blue.map((_, i) => {
          return (
            <UserWrapper key={i}>
              <UserName team={Team.BLUE}>
                {props.game.blue[i].summonerName}
              </UserName>
              <UserImgWrapper>
                <UserImg src={urlChampion(props.game.blue[i].championName)} />
              </UserImgWrapper>
            </UserWrapper>
          );
        })}
      </TeamWrapper>
    </UsersInfoWrapper>
  );
};
