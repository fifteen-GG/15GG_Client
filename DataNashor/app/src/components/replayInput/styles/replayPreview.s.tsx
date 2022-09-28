import styled from 'styled-components';
import * as Palette from '../../../assets/colorPalette';
import BackgroundImg from '../../../assets/svg/nashor_bg_372.svg';

interface propsType {
  sort: boolean;
}

export const ReplayPreviewWrapper = styled.div<propsType>`
  display: flex;
  flex-direction: column;
  height: 242px;
  background-color: ${Palette.NASHOR_BLACK_100};
  border-radius: 16px;
  font-size: ${(props) => `${props.sort === true ? '16px' : '12px'}`};
  justify-content: ${(props) => `${props.sort === true ? 'center' : 'none'}`};
  align-items: center;
  color: ${Palette.NASHOR_WHITE};
  background-image: url(${BackgroundImg});
  font-weight: 500;
`;
