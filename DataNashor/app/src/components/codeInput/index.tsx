import { CodeInputField } from './CodeInputField';
import { useState } from 'react';
import {
  CodeHelpLink,
  CodeHelpMsg,
  CodeInputHeaderWrapper,
  CodeInputMsg,
  CodeInputWrapper,
  StartAnalysisButton,
} from './styles/codeInput.s';

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
  const dummyCode = ['1', '2', 'A', 'B', 'C', '3'];
  const [inputBoxInit, setInputBoxInit] = useState(true);

  const onClick = () => {
    if (JSON.stringify(code) === JSON.stringify(dummyCode)) {
      props.setCodeValidation(true);
      ipcRenderer.send('START_BACKGROUND_VIA_MAIN', {
        number: 25,
      }); // 잘 감
      ipcRenderer.on('START_PROCESSING', (event: any, args: any) => {
        console.log('app.tsx START_PROCESSING', args.message);
      });
    } else {
      setInputBoxInit(false);
    }
  };

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
