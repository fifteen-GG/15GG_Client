import {CodeInputWrapper as TimeOutputWrapper} from "./styles/codeInput.s";
import * as Palette from "../../assets/colorPalette";
import styled from "styled-components";

const OutputFieldWrapper = styled.div`
  display: flex;
  height: 56px;
  width: 278px;
  margin-top: 139px;
  margin-left: 19px;
  justify-content: center;
  align-items:center;
`
const OutputField = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 61.5px;
  height: 56px;
  font-size: 24px;
  justify-content: center;
  text-align: center;
  align-items: center;
  color: ${Palette.NASHOR_WHITE};
  font-weight: 300;
  border-radius: 8px;
  background-color: ${Palette.NASHOR_BLACK_100};
  margin-right: 6px;
`
const Colon = styled.div`
  display: flex;
  color: ${Palette.NASHOR_WHITE};
  padding-right: 6px;
  font-size: 24px;
`

export const TimeOutput = () => {
    return(
    <TimeOutputWrapper>
        <OutputFieldWrapper>
            <OutputField />
            <OutputField />
            <Colon>:</Colon>
            <OutputField />
            <OutputField />
        </OutputFieldWrapper>
    </TimeOutputWrapper>
    )
}