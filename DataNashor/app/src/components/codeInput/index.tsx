import { CodeInputField } from './CodeInputField';
import { useState, useEffect } from 'react';
import {
  CodeHelpLink,
  CodeHelpMsg,
  CodeInputHeaderWrapper,
  CodeInputMsg,
  CodeInputWrapper,
  StartAnalysisButton,
} from './styles/codeInput.s';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

const electron = window.require('electron');
const ipcRenderer = electron.ipcRenderer;

const CodeInputHeader = () => {
  return <CodeInputHeaderWrapper>데이터 코드 입력</CodeInputHeaderWrapper>;
};
interface propsType {
  codeValidation: boolean;
  setCodeValidation: React.Dispatch<React.SetStateAction<boolean>>;
}
export const CodeInput = (props: propsType) => {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [inputBoxInit, setInputBoxInit] = useState(true);
  const [isValidated, setIsValidated] = useState(false);
  const [matchCount, setMatchCount] = useState(0);
  const replayName = useSelector((state: any) => state.replayName);

  const validateCode = async (code: string, matchId: string) => {
    console.log(code, matchId);
    const response1 = await axios.post(
      `${process.env.REACT_APP_GG_API_ROOT}` + 'match/update/status',
      { match_id: matchId, status: 1 },
      { headers: { 'Content-Type': 'application/json' } },
    );
    const response = await axios.post(
      `${process.env.REACT_APP_GG_API_ROOT}` + 'code/update/match_id',
      { code: code, match_id: matchId },
      { headers: { 'Content-Type': 'application/json' } },
    );
    if (response.status === 200 && response1.status === 200) {
      setIsValidated(true);
      console.log('code validated');
    } else {
      setIsValidated(false);
    }
  };

  const onClick = () => {
    setMatchCount(matchCount + 1);
    validateCode(
      code.join(''),
      replayName.replace('.rofl', '').replace('-', '_'),
    );
  };

  useEffect(() => {
    if (isValidated) {
      props.setCodeValidation(true);
      console.log(replayName);
      ipcRenderer.send('START_BACKGROUND_VIA_MAIN', { number: replayName });
      ipcRenderer.send('STATUS_FROM_BACKGROUND', { message: 1 });
      ipcRenderer.on('START_PROCESSING', (event: any, args: any) => {
        console.log('app.tsx START_PROCESSING', args.message);
      });
    } else {
      if (code[5] !== '') {
        setInputBoxInit(false);
      }
    }
  }, [isValidated]);

  return (
    <CodeInputWrapper>
      <CodeInputHeader />
      <CodeInputMsg>
        15.gg에서 발급받은 여섯자리 번호를 입력해주세요.
      </CodeInputMsg>
      <CodeInputField
        setCode={setCode}
        code={code}
        inputBoxInit={inputBoxInit}
        setInputBoxInit={setInputBoxInit}
      />
      <CodeHelpMsg>
        어디서 코드를 발급받을 수 있나요? <CodeHelpLink>바로가기</CodeHelpLink>
      </CodeHelpMsg>
      <StartAnalysisButton onClick={() => onClick()}>
        분석 시작
      </StartAnalysisButton>
    </CodeInputWrapper>
  );
};
