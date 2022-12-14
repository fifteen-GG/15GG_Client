import styled from 'styled-components';
import * as Palette from '../../../assets/colorPalette';
interface propsType {
  fileName: string;
}
export const ReplayFileNameWrapper = styled.div<propsType>`
  display: flex;
  background-color: ${Palette.NASHOR_BLACK_100};
  height: 64px;
  margin-top: 16px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  color: ${(props) =>
    `${
      props.fileName === ''
        ? `${Palette.NASHOR_TURQ_LINKS}`
        : `${Palette.NASHOR_WHITE}`
    }`};
  font-size: 16px;
`;
