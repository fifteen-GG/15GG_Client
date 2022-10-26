import styled from 'styled-components';
import * as Palette from '../../../assets/colorPalette';
interface propsType {
  isActive: boolean;
}
export const ReplayFileNameWrapper = styled.div`
  display: flex;
  height: 64px;
  margin-top: 16px;
`;
export const InputField = styled.div<propsType>`
  display: flex;
  height: 100%;
  width: 100%;
  color: ${Palette.NASHOR_TURQ_LINKS};
  font-size: 16px;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background-color: ${props =>
    `${
      props.isActive ? `${Palette.NASHOR_GRAY}` : `${Palette.NASHOR_BLACK_100}`
    }`};
`;
