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
import { UsersInfo } from './UsersInfo';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { urlGameData } from '../utils/Url';
import Lottie from 'lottie-react';
import { lottie } from '../../assets';

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
        urlGameData(props.fileName.replace('.rofl', '').replace('-', '_')),
      );
      setGame(response.data as gameData);
      setLoading(false);
    } catch (error) {
      //응답 실패
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, [props]);

  const [game, setGame] = useState<gameData>();
  const [loading, setLoading] = useState(true);

  return (
    <ReplayPreviewWrapper sort={loading}>
      {loading ? (
        <>
          <Lottie
            animationData={lottie}
            style={{ width: '60px', height: '60px' }}
          />
          데이터 불러오는 중...
        </>
      ) : (
        <>
          <UsersInfo game={game as gameData} />
          {game?.gameCreation.slice(0, 10)} · 패치{' '}
          {game?.gameVersion.slice(0, 5)}
        </>
      )}
    </ReplayPreviewWrapper>
  );
};
