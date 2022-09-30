import { ReplayFileNameWrapper } from './styles/replayFileName.s';
import React, { useCallback } from 'react';
import { useDropzone, FileWithPath } from 'react-dropzone';

export const ReplayFileName = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const files = acceptedFiles.map((file: FileWithPath) => (
    <li key={file.path}>{file.name}</li>
  ));

  return (
    <ReplayFileNameWrapper
      onDrop={(acceptedFiles) => console.log(acceptedFiles)}
    >
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <u>파일을 입력해 주세요.{files}</u>
      </div>
    </ReplayFileNameWrapper>
  );
};
