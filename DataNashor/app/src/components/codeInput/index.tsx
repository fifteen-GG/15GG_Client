import { CodeInputField } from "./CodeInputField";
import {
  CodeHelpLink,
  CodeHelpMsg,
  CodeInputHeaderWrapper,
  CodeInputMsg,
  CodeInputWrapper,
  StartAnalysisButton,
} from "./styles/codeInput.s";

const CodeInputHeader = () => {
  return <CodeInputHeaderWrapper>데이터 코드 입력</CodeInputHeaderWrapper>;
};

export const CodeInput = () => {
  return (
    <CodeInputWrapper>
      <CodeInputHeader />
      <CodeInputMsg>
        15.gg에서 발급받은 여섯자리 번호를 입력해주세요.
      </CodeInputMsg>
      <CodeInputField />
      <CodeHelpMsg>
        어디서 코드를 발급받을 수 있나요? <CodeHelpLink>바로가기</CodeHelpLink>
      </CodeHelpMsg>
      <StartAnalysisButton>분석 시작</StartAnalysisButton>
    </CodeInputWrapper>
  );
};
