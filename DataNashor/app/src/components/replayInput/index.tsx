import { ReplayFileName } from "./ReplayFileName";
import { ReplayPreview } from "./ReplayPreview";
import { ReplayInputHeader, ReplayInputWrapper } from "./styles/replayInput.s";

export const ReplayInput = () => {
  return (
    <ReplayInputWrapper>
      <ReplayInputHeader>분석할 리플레이 선택</ReplayInputHeader>
      <ReplayPreview />
      <ReplayFileName />
    </ReplayInputWrapper>
  );
};
