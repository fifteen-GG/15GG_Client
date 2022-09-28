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
  codeIsTrue: number;
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
  font-weight: 500;
  border-radius: 8px;
  border: ${(props) =>
    `${
      props.codeIsTrue === 2 ? '0' : `1.5px solid ${Palette.NASHOR_RED_ERROR}`
    }`};
  outline: 0;
  background-color: ${Palette.NASHOR_BLACK_100};
  font-family: 'SUIT';
  animation: ${(props) =>
    `${
      props.codeIsTrue
        ? 'none'
        : `slidein 0.1s 3 ;
  @keyframes slidein {
    from {
      margin-left: 5px;
    }
    to {
      margin-right: 5px;
    }`
    }`}
  }
`;

export { CodeInputFieldWrapper, InputField };
