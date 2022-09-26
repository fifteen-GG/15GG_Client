import styled from 'styled-components';
import * as Palette from '../../../assets/colorPalette';

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
interface props {
  codeIsTrue: boolean;
}
const InputField = styled.input<props>`
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
  border-radius: 8px;
  border: ${(props) =>
    `${props.codeIsTrue ? '0' : `1.5px solid ${Palette.NASHOR_RED_ERROR}`}`};
  outline: 0;
  background-color: ${Palette.NASHOR_BLACK_100};
  font-family: 'SUIT';
  animation: ${(props) =>
    `${
      props.codeIsTrue
        ? 'none'
        : `vibration 0.1s 4 ;
  @keyframes vibration {
    from {
      transform: rotate(10deg);
    }
    to {
      transform: rotate(-10deg);
    }`
    }`}
  }
`;

export { CodeInputFieldWrapper, InputField };
