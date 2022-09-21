import { buildTimeValue } from '@testing-library/user-event/dist/utils';
import { useRef } from 'react';
import { ChangeEvent, useState } from 'react';
import { CodeInputFieldWrapper, InputField } from './styles/codeInputField.s';

export const CodeInputField = () => {
  const [code, setCode] = useState<string[]>(['', '', '', '', '', '']);

  const handleInput = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    let updatedCode = [...code];
    updatedCode[index] = e.target.value;
    setCode(updatedCode);
  };

  const ref = useRef<HTMLInputElement[]>([]);

  return (
    <CodeInputFieldWrapper>
      {code.map((_, i) => {
        return (
          <InputField
            type={'text'}
            ref={(elem) => (ref.current[i] = elem!)}
            maxLength={1}
            key={i}
            value={code[i]}
            onChange={(e) => {
              handleInput(e, i);
              if (e.target.value.length >= 1) {
                ref.current[i + 1]!.focus();
              }
              if (e.target.value.length === 0) {
                ref.current[i]!.focus();
              }
            }}
            onKeyDown={(e) => {
              if (e.key === 'Backspace' && code[i] === '') {
                ref.current[i - 1]!.focus();
              }
            }}
          />
        );
      })}
    </CodeInputFieldWrapper>
  );
};
