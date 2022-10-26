import { ReplayPreviewWrapper } from './styles/replayPreview.s';
import styled from 'styled-components';
import BackgroundImage from '../../../src/assets/svg/honeybee.png';

export const HoneyBeeWrapper = styled.div`
  width: 60px;
  height: 60px;
  background-image: url(${BackgroundImage});
  margin-bottom: 4px;
`;

export const ReplayPreview = () => {
  return (
    <ReplayPreviewWrapper sort={true}>
      <HoneyBeeWrapper />
      파일을 선택해 주세요.
    </ReplayPreviewWrapper>
  );
};
