import styled from 'styled-components';
import * as Palette from '../../assets/colorPalette';
import { LeagueTeams } from './LeagueTeams';
import WinRateGraph from './WinRateGraph';
import { useEffect, useState } from 'react';
const { ipcRenderer } = window.require('electron');

const WinRateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const EmptyWinrate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  font-size: 20px;
  color: ${Palette.NASHOR_WHITE};
`;

export const WinRate = () => {
  ipcRenderer.on('MATCH_FROM_BACKGROUND', (event: any, args: any) => {
    const replayName = args.matchName;
    console.log(args.matchName);
    if (replayName) {
      setMatchId(replayName.replace('.rofl', ''));
    }
  });

  const [winRate, setWinRate] = useState(50);
  const [gameData, setGameData] = useState(Object);
  const [parse, setParse] = useState(0);
  const [status, setStatus] = useState(0);
  const [matchId, setMatchId] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  // const { responseMessage } = useSocket(state => {
  //   if (state === SocketStatus.onNewChatReceived) {
  //     setParse(data => data + 1);
  //     setStatus(1);
  //   } else if (state === SocketStatus.onConnectionFailed) {
  //     console.error('onConnectionFailed');
  //     setStatus(0);
  //   } else if (state === SocketStatus.onConnectionOpened) {
  //     console.log('onConnectionOpened');
  //   }
  // }, matchId);

  useEffect(() => {
    const ws = new WebSocket(
      `${process.env.REACT_APP_GG_WS_ROOT}` + 'match/' + `${matchId}`,
    );
    console.log(
      `${process.env.REACT_APP_GG_WS_ROOT}` + 'match/' + `${matchId}`,
    );
    ws.onmessage = (event: any) => {
      setResponseMessage(event.data);
      console.log(event.data);
      setParse(data => data + 1);
      setStatus(1);
    };
    ws.onclose = () => {
      setStatus(2);
      console.log('onclose');
    };
  }, [matchId]);

  useEffect(() => {
    if (parse) {
      if (responseMessage !== 'Game ended') {
        let data = JSON.parse(responseMessage);
        setGameData(data);
        setWinRate(
          data.match_data[data.match_data.length - 1].blue_team_win_rate,
        );
      }
    }
  }, [parse, responseMessage]);

  return status === 0 || status === 2 ? (
    <EmptyWinrate>승률 대기중...</EmptyWinrate>
  ) : (
    <WinRateWrapper>
      <LeagueTeams />
      <WinRateGraph winRate={winRate} />
    </WinRateWrapper>
  );
};
