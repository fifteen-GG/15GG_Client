import styled from 'styled-components';
import BackgroundImage from '../../assets/svg/image12.png';
import * as Palette from '../../assets/colorPalette';
import { OutputWrapper } from './styles/analysisTime.s';

export const AnounceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  height: 104px;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: ${Palette.NASHOR_WHITE};
  font-weight: 500;
  margin-top: 112px;
`;
export const Image = styled.div`
  background-image: url(${BackgroundImage});
  width: 60px;
  height: 60px;
  margin-bottom: 6px;
`;
export const AppLink = styled.div`
  font-size: 12px;
  color: ${Palette.NASHOR_TURQ_LINKS};
  margin-top: 8px;
  text-decoration: underline;
`;
export const Initialize = styled.div`
  margin-top: 130px;
  font-size: 12px;
  font-weight: 500px;
  color: ${Palette.NASHOR_GRAY_TEXT};
  :hover {
    text-decoration: underline;
  }
`;

interface propsType {
  setCodeValidation: Function;
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
          props.setCodeValidation(false);
        }}
      >
        다른 게임 분석하기
      </Initialize>
    </>
  );
};
