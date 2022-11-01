import styled from "styled-components";
import * as Palette from "./assets/colorPalette";
import { CodeInput } from "./components/codeInput";
import { Header } from "./components/header";
import { ReplayInput } from "./components/replayInput";
import { TimeOutput } from "./components/timeoutput/AnalysisTime";
import { WinRate } from "./components/winRate";
import { AfterRunAnounce } from './components/timeoutput/AnalysisDone';
import { OutputWrapper } from './components/timeoutput/styles/analysisTime.s';
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import backGround from "./assets/svg/nashor_or_bg.svg";

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
  justify-content: space-between;
`;

const OverlayPlaceWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  // background-color: red;
`;

const AppWrapper2 = styled.div`
  // margin-left: 2050px;
  margin-left: 1000px;
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
  const [isValidatedCode, setIsValidatedCode] = useState<boolean>(false);
  const [endValidation, setEndValidation] = useState<boolean>(false);
  const [isFileInput, setIsFileInput] = useState<boolean>(false);
  const [codeValidation, setCodeValidation] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="app"
          element={
            <AppWrapper>
              <Header />
              <ContentWrapper>
                <ReplayInput
                  isValidatedCode={isValidatedCode}
                  setIsFileInput={setIsFileInput}
                />
                {isValidatedCode ? (
                  <OutputWrapper>
                    {endValidation ? (
                      <AfterRunAnounce setIsValidatedCode={setIsValidatedCode} />
                    ) : (
                      <TimeOutput />
                    )}
                  </OutputWrapper>
                ) : (
                  <CodeInput
                    isValidatedCode={isValidatedCode}
                    setIsValidatedCode={setIsValidatedCode}
                    isFileInput={isFileInput}
                  />
                )}
              </ContentWrapper>
            </AppWrapper>
          }
        ></Route>
        <Route
          path="overlay"
          element={
            <OverlayPlaceWrapper>
              <AppWrapper2>
                <WinRate />
              </AppWrapper2>
            </OverlayPlaceWrapper>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
