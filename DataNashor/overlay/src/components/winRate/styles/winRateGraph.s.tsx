import styled from "styled-components";
import * as Palette from "../../../assets/colorPalette";

export const Graph = styled.div`
  display: flex;
  flex-direction: column;
  height: 28px;
  width: calc(100% - 36px);
  margin: 12px 0 12px 0;
`;
export const BarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 8px;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`;
export const RateWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 16px;
  justify-content: space-between;
`;
export const WinningRate = styled.div`
  font-size: 16px;
  color: ${Palette.NASHOR_WHITE};
  font-weight: 900;
`;
export const GraphTitle = styled.div`
  margin-top: 2px;
  font-size: 14px;
  color: ${Palette.NASHOR_WHITE};
`;
