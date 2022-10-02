import styled from 'styled-components';
import * as Palette from '../../../assets/colorPalette';
interface propsType {
  fileDropped: boolean;
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
      props.fileDropped
        ? `${Palette.NASHOR_WHITE}`
        : `${Palette.NASHOR_TURQ_LINKS}`
    }`};
  font-size: 16px;
`;
