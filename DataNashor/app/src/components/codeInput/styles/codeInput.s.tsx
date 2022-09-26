import styled from 'styled-components';
import * as Palette from '../../../assets/colorPalette';

const CodeInputWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 348px;
  flex-direction: column;
  border-radius: 16px;
  background-color: ${Palette.NASHOR_GRAY};
  padding: 0px 16px 0px 16px;
`;

const CodeInputHeaderWrapper = styled.div`
  box-sizing: border-box;
  padding: 16px 0 10px 0;
  display: flex;
  width: 100%;
  height: 40px;
  align-items: center;
  color: ${Palette.NASHOR_WHITE};
  font-size: 18px;
  font-weight: 400;
`;

const CodeInputMsg = styled.div`
  display: flex;
  color: ${Palette.NASHOR_WHITE};
  height: 12px;
  font-size: 12px;
  line-height: 0.8;
  font-weight: 300;
`;
const CodeHelpMsg = styled.div`
  display: flex;
  height: 12px;
  font-size: 12px;
  justify-content: center;
  color: ${Palette.NASHOR_WHITE};
  white-space: pre-wrap;
  line-height: 0.8;
  padding-bottom: 12px;
  border-bottom: 2px dashed;
  border-color: #bdbdc0;
`;
const CodeHelpLink = styled.u`
  color: ${Palette.NASHOR_TURQ_LINKS};
`;

const StartAnalysisButton = styled.div`
  display: flex;
  background-color: ${Palette.NASHOR_BLUE_PRIMARY};
  color: ${Palette.NASHOR_WHITE};
  height: 64px;
  margin-top: 14px;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  border-radius: 16px;
  &:hover {
    cursor: pointer;
  }
`;

export {
  CodeInputHeaderWrapper,
  CodeInputWrapper,
  CodeInputMsg,
  CodeHelpMsg,
  CodeHelpLink,
  StartAnalysisButton,
};
