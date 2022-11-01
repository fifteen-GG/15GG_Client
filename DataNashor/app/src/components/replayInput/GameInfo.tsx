import { ReplayPreviewWrapper } from './styles/replayPreview.s';
import { UsersInfo } from './UsersInfo';
import { useState, useEffect } from 'react';
import axios from 'axios';
import GGLoading from 'lottie-react';
import * as GG_LOADING_KHAZIX from '../../assets/svg/GG_khazix.json';

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
  const getData = async () => {
    try {
      //응답 성공
      const response = await axios.get(
        `${
          process.env.REACT_APP_GG_API_ROOT
        }/riot/match/preview/${props.fileName.replace('.rofl', '')}`,
      );
      setGame(response.data as gameData);
      setLoading(false);
    } catch (error) {
      //응답 실패
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
    console.log(process.env.REACT_APP_OPGG_API_ROOT);
  }, [props]);

  const [game, setGame] = useState<gameData>();
  const [loading, setLoading] = useState(true);

  return (
    <ReplayPreviewWrapper sort={loading}>
      {loading ? (
        <>
          <GGLoading
            animationData={GG_LOADING_KHAZIX}
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
