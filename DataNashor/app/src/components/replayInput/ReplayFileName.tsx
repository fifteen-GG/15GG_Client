import { ReplayFileNameWrapper } from './styles/replayFileName.s';
import { useDropzone, FileWithPath } from 'react-dropzone';
import { useState } from 'react';

export const ReplayFileName = () => {
  const [fileDropped, setFileDropped] = useState(false);
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const files = acceptedFiles.map((file: FileWithPath) => (
    <u key={file.path}>{file.name}</u>
  ));

  return (
    <div {...getRootProps({ className: 'dropzone' })}>
      <input {...getInputProps()} />
      <ReplayFileNameWrapper
        fileDropped={fileDropped}
        onDrop={() => setFileDropped(true)}
        onClick={() => setFileDropped(true)}
      >
        {fileDropped ? files : <u>드래그해서 파일 추가하기...</u>}
      </ReplayFileNameWrapper>
    </div>
  );
};
