import styled from "styled-components";
import * as Palette from "../../assets/colorPalette";
import { LeagueTeams } from "./LeagueTeams";
import WinRateGraph from "./WinRateGraph";

const WinRateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WinRate = () => {
  return (
    <WinRateWrapper>
      <LeagueTeams />
      <WinRateGraph />
    </WinRateWrapper>
  );
};
