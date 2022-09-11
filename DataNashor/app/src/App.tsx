import styled from "styled-components";
import * as Palette from "./assets/colorPalette";
import { Header } from "./components/header";
import { ReplayInput } from "./components/replayInput";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Palette.NASHOR_BLACK_100};
  height: 480px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 390px;
  padding: 16px;
  padding-top: 20px;
`;

const App = () => {
  return (
    <AppWrapper>
      <Header />
      <ContentWrapper>
        <ReplayInput />
      </ContentWrapper>
    </AppWrapper>
  );
};

export default App;
