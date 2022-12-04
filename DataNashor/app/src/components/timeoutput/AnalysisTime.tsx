import userEvent from '@testing-library/user-event';
import { useEffect, useState } from 'react';
import {
  OutputWrapper,
  OutputFieldWrapper,
  OutputFieldWithColonWrapper,
  OutputField,
  Announcement,
  Initialize,
} from './styles/analysisTime.s';
import { useDispatch, useSelector } from 'react-redux';
import { setLiveStatus } from '../../redux/Actions';

interface propsType {
  setCodeValidation: Function;
}

export const TimeOutput = (props: propsType) => {
  const [time, setTime] = useState(['0', '0', '0', '0']);
  const [responseMessage, setResponseMessage] = useState('');
  const [winRate, setWinRate] = useState(50);
  const [gameData, setGameData] = useState(Object);
  const [parse, setParse] = useState(0);
  const [status, setStatus] = useState(0);
  const [matchId, setMatchId] = useState('');
  const dispatch = useDispatch();
  const liveStatus = useSelector((state: any) => state.liveStatus);
  const replayName = useSelector((state: any) => state.replayName);
  // const matchId = replayName.replace('.rofl', '');

  const SortTime = (timestamp: number) => {
    const minutes = Math.floor(timestamp / 60);
    const seconds = timestamp % 60;
    if (minutes < 10) {
      time[0] = '0';
      time[1] = minutes.toString();
    } else {
      time[0] = Math.floor(minutes / 10).toString();
      time[1] = (minutes % 10).toString();
    }
    if (seconds < 10) {
      time[2] = '0';
      time[3] = seconds.toString();
    } else {
      time[2] = Math.floor(seconds / 10).toString();
      time[3] = (seconds % 10).toString();
    }
    setTime(time);
  };

  useEffect(() => {
    if (replayName.length) {
      setMatchId(replayName.replace('.rofl', ''));
    }
  }, [replayName]);

  useEffect(() => {
    const ws = new WebSocket(
      `${process.env.REACT_APP_GG_WS_ROOT}` + 'match/' + `${matchId}`,
    );
    console.log(
      `${process.env.REACT_APP_GG_WS_ROOT}` + 'match/' + `${matchId}`,
    );
    ws.onmessage = (event: any) => {
      setResponseMessage(event.data);
      setParse(data => data + 1);
      setStatus(1);
      // console.log(event.data);
      console.log(parse);
    };
    ws.onclose = () => {
      setStatus(2);
      dispatch(setLiveStatus(2));
      console.log(liveStatus);
      console.log('onclose 22222222');
    };
  }, [matchId]);

  useEffect(() => {
    if (parse) {
      if (responseMessage !== 'Game ended') {
        let data = JSON.parse(responseMessage);
        // if(data === 'Game Ended')
        setGameData(data);
        SortTime(
          Math.trunc(data.match_data[data.match_data.length - 1].timestamp),
        );
        console.log(data.match_data[data.match_data.length - 1].timestamp);
        setWinRate(
          data.match_data[data.match_data.length - 1].blue_team_win_rate,
        );
      }
      if (responseMessage === 'Game ended') {
        setStatus(3);
        dispatch(setLiveStatus(2));
        console.log(liveStatus);
        console.log(status);
      }
    }
  }, [parse, responseMessage]);

  return (
    <>
      <OutputFieldWrapper>
        {time.map((_, i) => {
          if (i === 2)
            return (
              <OutputFieldWithColonWrapper key={i}>
                :<OutputField key={i}>{time[i]}</OutputField>
              </OutputFieldWithColonWrapper>
            );
          return <OutputField key={i}>{time[i]}</OutputField>;
        })}
      </OutputFieldWrapper>
      <Announcement>실시간 분석 진행중...</Announcement>
      <Initialize
        onClick={() => {
          props.setCodeValidation(false);
        }}
      >
        다른 게임 분석하기
      </Initialize>
    </>
  );
};
