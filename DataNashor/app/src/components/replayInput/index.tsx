import { ReplayFileName } from './ReplayFileName';
import { ReplayPreview } from './ReplayPreview';
import { GameInfo } from './GameInfo';
import {
  RealTimeInfo,
  ReplayInputHeader,
  ReplayInputWrapper,
} from './styles/replayInput.s';

interface propsType {
  codeValidation: boolean;
}
export const ReplayInput = (props: propsType) => {
  return (
    <ReplayInputWrapper>
      {props.codeValidation ? (
        <ReplayInputHeader>
          데이터 분석중 <RealTimeInfo>실시간</RealTimeInfo>
        </ReplayInputHeader>
      ) : (
        <ReplayInputHeader>분석할 리플레이 선택</ReplayInputHeader>
      )}
      {props.codeValidation ? <GameInfo /> : <ReplayPreview />}
      <ReplayFileName />
    </ReplayInputWrapper>
  );
};
