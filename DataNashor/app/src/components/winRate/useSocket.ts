import { useState, useEffect } from 'react';

export enum SocketStatus {
  onNewChatReceived = 'onNewChatReceived',
  onConnectionFailed = 'onConnectionFailed',
  onConnectionOpened = 'onConnectionOpened',
}

export const useSocket = (
  onConnectionStateChanged: (state: SocketStatus) => void,
  matchId: string,
) => {
  const [responseMessage, setResponseMessage] = useState('');

  useEffect(() => {
    connectStart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const connectStart = () => {
    const ws = new WebSocket(
      `${process.env.REACT_APP_GG_WS_ROOT}` + 'match/' + matchId,
    );
    ws.onmessage = e => {
      e.preventDefault();
      const data = e.data;
      setResponseMessage(data);
      onConnectionStateChanged(SocketStatus.onNewChatReceived);
    };
    ws.onopen = () => {
      onConnectionStateChanged(SocketStatus.onConnectionOpened);
    };
    ws.onclose = () => {
      onConnectionStateChanged(SocketStatus.onConnectionFailed);
    };
  };
  return { responseMessage: responseMessage };
};
