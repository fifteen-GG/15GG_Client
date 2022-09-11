import styled from "styled-components";
import * as Palette from "./assets/colorPalette";
import { CodeInput } from "./components/codeInput";
import { Header } from "./components/header";
import { ReplayInput } from "./components/replayInput";

const AppWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: ${Palette.NASHOR_BLACK_100};
  height: 480px;
  width: 800px;
`;

const ContentWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  height: 430px;
  width: 800px;
  padding: 16px;
  padding-top: 20px;
`;

const App = () => {
  return (
    <AppWrapper>
      <Header />
      <ContentWrapper>
        <ReplayInput />
        <CodeInput />
      </ContentWrapper>
    </AppWrapper>
  );
};

export default App;
