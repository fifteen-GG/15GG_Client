import styled from 'styled-components';
import * as Palette from '../../../assets/colorPalette';

export const OutputWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 348px;
  flex-direction: column;
  border-radius: 16px;
  background-color: ${Palette.NASHOR_GRAY};
  padding: 0px 16px 0px 16px;
`;
export const OutputFieldWrapper = styled.div`
  display: flex;
  height: 56px;
  width: 278px;
  margin: 139px 19px 12px 19px;
  align-items: center;
  justify-content: space-between;
`;
export const OutputFieldWithColonWrapper = styled.div`
  display: flex;
  width: 75.5px;
  font-size: 24px;
  color: ${Palette.NASHOR_WHITE};
  align-items: center;
  justify-content: space-between;
`;
export const OutputField = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 61.5px;
  height: 56px;
  font-size: 24px;
  justify-content: center;
  text-align: center;
  align-items: center;
  color: ${Palette.NASHOR_WHITE};
  font-weight: 500;
  border-radius: 8px;
  border: 0;
  background-color: ${Palette.NASHOR_BLACK_100};
`;
export const Colon = styled.div`
  display: flex;
  color: ${Palette.NASHOR_WHITE};
  padding-right: 6px;
  font-size: 24px;
`;
export const Announcement = styled.div`
  height: 12px;
  color: ${Palette.NASHOR_WHITE};
  font-size: 12px;
  font-weight: 500;
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
