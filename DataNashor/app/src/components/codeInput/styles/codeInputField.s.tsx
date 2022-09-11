import styled from "styled-components";
import * as Palette from "../../../assets/colorPalette";

const CodeInputFieldWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 216px;
  color: ${Palette.NASHOR_WHITE};
  padding-top: 16px;
  font-size: 18px;
  font-weight: 500;
  justify-content: space-between;
`;

const InputField = styled.input`
  box-sizing: border-box;
  display: flex;
  width: 48px;
  height: 56px;
  font-size: 24px;
  justify-content: center;
  text-align: center;
  align-items: center;
  color: ${Palette.NASHOR_WHITE};
  font-weight: 300;
  border: 0px;
  border-radius: 8px;
  outline: 0;
  background-color: ${Palette.NASHOR_BLACK_100};
  font-family: "SUIT";
`;

export { CodeInputFieldWrapper, InputField };
