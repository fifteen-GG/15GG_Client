import styled from 'styled-components';
import * as Palette from '../../../assets/colorPalette';

export const ReplayInputWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 404px;
  flex-direction: column;
  border-radius: 16px;
  background-color: ${Palette.NASHOR_GRAY};
  padding: 0px 16px;
`;

export const ReplayInputHeader = styled.div`
  box-sizing: border-box;
  padding: 16px 0;
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
  color: ${Palette.NASHOR_WHITE};
  font-size: 18px;
`;

export const RealTimeInfo = styled.div`
  display: flex;
  width: 33px;
  height: 14px;
  background-color: ${Palette.NASHOR_GREEN};
  font-size: 8px;
  color: ${Palette.NASHOR_WHITE};
  margin-left: 4px;
  margin-top: 4px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;
