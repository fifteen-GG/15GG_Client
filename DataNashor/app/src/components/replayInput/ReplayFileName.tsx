import { ReplayFileNameWrapper } from './styles/replayFileName.s';
import { useDropzone, FileWithPath } from 'react-dropzone';
import { useState, useEffect, useCallback } from 'react';

interface propsType {
  //부모 컴포넌트로 파일명 전달.
  fileInfo: { fileName: string; filePath: string };
  setFileInfo: Function;
}
export const ReplayFileName = (props: propsType) => {
  //DropZone 사용을 위한 state
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: {
      'text/*': ['.rofl'],
    },
  });

  useEffect(() => {
    if (acceptedFiles[0]) {
      //오브젝트 set함수 사용은 오브젝트 통채로 넣어주기 object: {}
      props.setFileInfo({
        fileName: `${acceptedFiles[0].name}`,
        filePath: `${(acceptedFiles[0] as FileWithPath).path}`,
      });
    }
  }, [acceptedFiles]);

  return (
    <div {...getRootProps({ className: 'dropzone' })}>
      <input {...getInputProps()} />
      <ReplayFileNameWrapper fileName={props.fileInfo.fileName}>
        {props.fileInfo.fileName === '' ? (
          <u>드래그해서 파일 추가하기...</u>
        ) : (
          <u>{props.fileInfo.fileName}</u>
        )}
      </ReplayFileNameWrapper>
    </div>
  );
};
