import styled from "styled-components";
import * as Palette from "../../../assets/colorPalette";

export const HeaderWrapper = styled.div`
  display: flex;
  height: 56px;
  width: 100%;
  background-color: ${Palette.NASHOR_GRAY};
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Palette.NASHOR_WHITE};
  font-size: 20px;
  font-weight: 500;
  height: 52px;
  width: 110px;
  margin-left: 24px;
`;
