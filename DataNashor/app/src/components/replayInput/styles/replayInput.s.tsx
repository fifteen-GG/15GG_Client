import styled from "styled-components";
import * as Palette from "../../../assets/colorPalette";

const ReplayInputWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 404px;
  margin-right: 16px; // TODO Fix CSS
  flex-direction: column;
  border-radius: 16px;
  background-color: ${Palette.NASHOR_GRAY};
  padding: 0px 16px;
`;

const ReplayInputHeader = styled.div`
  box-sizing: border-box;
  padding: 16px 0;
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
  color: ${Palette.NASHOR_WHITE};
  font-size: 18px;
  font-weight: 400;
`;

export { ReplayInputWrapper, ReplayInputHeader };
