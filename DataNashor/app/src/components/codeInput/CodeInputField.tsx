import { buildTimeValue } from '@testing-library/user-event/dist/utils';
import { useRef } from 'react';
import { ChangeEvent } from 'react';
import { CodeInputFieldWrapper, InputField } from './styles/codeInputField.s';

interface propsType {
  code: string[];
  setCode: React.Dispatch<React.SetStateAction<string[]>>;
  inputBoxInit: boolean;
  setInputBoxInit: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CodeInputField = (props: propsType) => {
  var regExp = /^[a-zA-Z0-9]*$/;

  const handleInput = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    let updatedCode = [...props.code];
    updatedCode[index] = e.target.value.toUpperCase();
    //특수문자 입력 제한
    if (regExp.test(updatedCode[index])) {
      updatedCode[index] = updatedCode[index].replace(regExp, '');
    }
    props.setCode(updatedCode);

    if (props.inputBoxInit === false) props.setInputBoxInit(true);
  };

  const ref = useRef<HTMLInputElement[]>([]);

  return (
    <CodeInputFieldWrapper>
      {props.code.map((_, i) => {
        return (
          <InputField
            type={'text'}
            ref={elem => (ref.current[i] = elem!)}
            maxLength={1}
            key={i}
            value={props.code[i]}
            onChange={e => {
              handleInput(e, i);
              if (e.target.value.length >= 1 && regExp.test(e.target.value)) {
                if (i < 5) ref.current[i + 1]!.focus();
              }
            }}
            onKeyDown={e => {
              if (e.key === 'Backspace' && props.code[i] === '') {
                if (i > 0) ref.current[i - 1]!.focus();
              }
            }}
            inputBoxInit={props.inputBoxInit}
          />
        );
      })}
    </CodeInputFieldWrapper>
  );
};
