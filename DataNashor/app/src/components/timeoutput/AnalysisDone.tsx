import {
  AnounceWrapper,
  Image,
  AppLink,
  Initialize,
} from './styles/analysisDone.s';

interface propsType {
  setIsValidatedCode: Function;
}

export const AfterRunAnounce = (props: propsType) => {
  return (
    <>
      <AnounceWrapper>
        <Image />
        실시간 승률분석 완료
        <AppLink>앱에서 확인하기</AppLink>
      </AnounceWrapper>
      <Initialize
        onClick={() => {
          props.setIsValidatedCode(false);
        }}
      >
        다른 게임 분석하기
      </Initialize>
    </>
  );
};
