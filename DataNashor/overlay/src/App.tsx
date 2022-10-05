import styled from "styled-components";
import * as Palette from "./assets/colorPalette";
import backGround from "./assets/svg/nashor_or_bg.svg";

const AppWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-image: url(${backGround});
  border-radius: 10px;
  opacity: 0.9;
  height: 100px;
  width: 360px;
`;

const App = () => {
  return (
    <AppWrapper>
      <p>hi</p>
    </AppWrapper>
  );
};

export default App;
