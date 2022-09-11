import { ChangeEvent, useState } from "react";
import { CodeInputFieldWrapper, InputField } from "./styles/codeInputField.s";

export const CodeInputField = () => {
  const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);

  const handleInput = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    let updatedCode = [...code];
    updatedCode[index] = e.target.value;
    setCode(updatedCode);
  };

  return (
    <CodeInputFieldWrapper>
      {code.map((_, i) => {
        return (
          <InputField
            maxLength={1}
            key={i}
            value={code[i]}
            onChange={(e) => {
              handleInput(e, i);
            }}
          />
        );
      })}
    </CodeInputFieldWrapper>
  );
};
