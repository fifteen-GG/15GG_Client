import styled from "styled-components";
import * as Palette from "../../../assets/colorPalette";

const ReplayPreviewWrapper = styled.div`
  display: flex;
  height: 242px;
  background-color: ${Palette.NASHOR_BLACK_100};
  border-radius: 16px;
  font-size: 16px;
  font-weight: 500;
  justify-content: center;
  align-items: center;
  color: ${Palette.NASHOR_WHITE};
`;

export { ReplayPreviewWrapper };
