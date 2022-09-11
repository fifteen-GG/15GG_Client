import styled from "styled-components";
import * as Palette from "../../../assets/colorPalette";

const ReplayFileNameWrapper = styled.div`
  display: flex;
  background-color: ${Palette.NASHOR_BLACK_100};
  height: 64px;
  margin-top: 16px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  color: ${Palette.NASHOR_WHITE};
  font-size: 16px;
  font-weight: 400;
`;

export { ReplayFileNameWrapper };
