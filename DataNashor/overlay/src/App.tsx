import styled from "styled-components";
import * as Palette from "./assets/colorPalette";
import backGround from "./assets/svg/nashor_or_bg.svg";
import { WinRate } from "./components/winRate";

const OverlayPlaceWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  // background-color: red;
`;

const AppWrapper = styled.div`
  margin-left: 2050px;
  margin-top: 50px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-image: url(${backGround});
  border-radius: 10px;
  opacity: 0.8;
  height: 100px;
  width: 360px;
`;

const App = () => {
  return (
    <OverlayPlaceWrapper>
      <AppWrapper>
        <WinRate />
      </AppWrapper>
    </OverlayPlaceWrapper>
  );
};

export default App;
