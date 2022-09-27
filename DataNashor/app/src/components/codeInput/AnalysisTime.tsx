import {
  TimeOutputWrapper,
  OutputFieldWrapper,
  OutputField,
  Colon,
  Announcement,
} from "./styles/analysisTime.s";

export const TimeOutput = () => {
  return (
    <TimeOutputWrapper>
      <OutputFieldWrapper>
        <OutputField />
        <OutputField />
        <Colon>:</Colon>
        <OutputField />
        <OutputField />
      </OutputFieldWrapper>
      <Announcement>실시간 분석 진행중...</Announcement>
    </TimeOutputWrapper>
  );
};
