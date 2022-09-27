import styled from "styled-components";
import * as Palette from "./assets/colorPalette";
import { CodeInput } from "./components/codeInput";
import { Header } from "./components/header";
import { ReplayInput } from "./components/replayInput";
import { TimeOutput } from "./components/codeInput/AnalysisTime";
import { useState } from "react";

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
  padding: 16px 16px 16px 16px;
  padding-top: 20px;
  justify-content: space-between
`;

const App = () => {
  const [codeIsTrue, setCodeIsTrue] = useState(2);

  return (
    <AppWrapper>
      <Header />
      <ContentWrapper>
        <ReplayInput />
        {codeIsTrue === 1 ? <TimeOutput /> : 
        <CodeInput 
        codeIsTrue={codeIsTrue}
        setCodeIsTrue={setCodeIsTrue}
        />}
      </ContentWrapper>
    </AppWrapper>
  );
};

export default App;
