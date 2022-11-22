import styled from 'styled-components';
import * as Palette from './assets/colorPalette';
import { CodeInput } from './components/codeInput';
import { Header } from './components/header';
import { ReplayInput } from './components/replayInput';
import { TimeOutput } from './components/timeoutput/AnalysisTime';
import { WinRate } from './components/winRate';
import { AfterRunAnounce } from './components/timeoutput/AnalysisDone';
import { OutputWrapper } from './components/timeoutput/styles/analysisTime.s';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import backGround from './assets/svg/nashor_or_bg.svg';

const electron = window.require('electron');
const ipcRenderer = electron.ipcRenderer;

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
  const [codeValidation, setCodeValidation] = useState(false);
  const [endValidation, setEndValidation] = useState(true);

  useEffect(() => {
    console.log('shell start');
    ipcRenderer.send('MSG_FROM_BACKGROUND', { message: 'hello' });
    ipcRenderer.on('MSG_FROM_BACKGROUND', (event: any, args: any) => {
      console.log('app.tsx MSG_FROM_BACKGROUND', args); // 이게 안됨
    });
    // ipcRenderer.send('START_BACKGROUND_VIA_MAIN', {
    //   number: 25,
    // }); // 잘 감
    // ipcRenderer.on('START_PROCESSING', (event: any, args: any) => {
    //   console.log('app.tsx START_PROCESSING', args.message);
    // });
  }, [ipcRenderer]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="app"
          element={
            <AppWrapper>
              <Header />
              <ContentWrapper>
                <ReplayInput codeValidation={codeValidation} />
                {codeValidation ? (
                  <OutputWrapper>
                    {endValidation ? (
                      <AfterRunAnounce setCodeValidation={setCodeValidation} />
                    ) : (
                      <TimeOutput />
                    )}
                  </OutputWrapper>
                ) : (
                  <CodeInput
                    codeValidation={codeValidation}
                    setCodeValidation={setCodeValidation}
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
