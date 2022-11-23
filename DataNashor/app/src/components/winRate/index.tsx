import styled from 'styled-components';
import * as Palette from '../../assets/colorPalette';
import { LeagueTeams } from './LeagueTeams';
import WinRateGraph from './WinRateGraph';
import { useSocket, SocketStatus } from './useSocket';

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
  return (
    <WinRateWrapper>
      <LeagueTeams />
      <WinRateGraph />
    </WinRateWrapper>
  );
};
