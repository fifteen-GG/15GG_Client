import styled from "styled-components";
import * as Palette from "../../../assets/colorPalette";

const ReplayInputWrapper = styled.div`
  display: flex;
  width: 404px;
  flex-direction: column;
  border-radius: 16px;
  background-color: ${Palette.NASHOR_GRAY};
  padding: 0px 16px 0px 16px;
`;

const ReplayInputHeader = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
  color: ${Palette.NASHOR_WHITE};
  font-size: 18px;
  font-weight: 500;
`;

export { ReplayInputWrapper, ReplayInputHeader };
