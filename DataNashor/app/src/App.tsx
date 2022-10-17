import styled from 'styled-components';
import * as Palette from './assets/colorPalette';
import { CodeInput } from './components/codeInput';
import { Header } from './components/header';
import { ReplayInput } from './components/replayInput';
import { TimeOutput } from './components/timeoutput/AnalysisTime';
import { AfterRunAnounce } from './components/timeoutput/AnalysisDone';
import { OutputWrapper } from './components/timeoutput/styles/analysisTime.s';
import { useState } from 'react';

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

const App = () => {
  //1 은 입력코드와 발급코드가 일치할 때 시간출력컴포로 전환, 0과 2는
  //코드 인풋 컴포내에서, 코드의 불일치와, 코드 입력때의 코드인풋 컴포 유지.
  const [isValidatedCode, setIsValidatedCode] = useState<boolean>(false);
  const [endValidation, setEndValidation] = useState<boolean>(false);

  return (
    <AppWrapper>
      <Header />
      <ContentWrapper>
        <ReplayInput isValidatedCode={isValidatedCode} />
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
          />
        )}
      </ContentWrapper>
    </AppWrapper>
  );
};

export default App;
