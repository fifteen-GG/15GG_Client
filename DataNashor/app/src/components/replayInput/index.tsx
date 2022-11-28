import { ReplayFileName } from './ReplayFileName';
import { ReplayPreview } from './ReplayPreview';
import { GameInfo } from './GameInfo';
import {
  RealTimeInfo,
  ReplayInputHeader,
  ReplayInputWrapper,
} from './styles/replayInput.s';
import { useState, useEffect } from 'react';

interface propsType {
  codeValidation: boolean;
}
interface fileInfoType {
  fileName: string;
  filePath: string;
}
export const ReplayInput = (props: propsType) => {
  //서버 사용을 위해 파일명과 파일경로 state로 뽑아오기..
  const [response, setResponse] = useState(Boolean);
  const [fileInfo, setFileInfo] = useState<fileInfoType>({
    fileName: '',
    filePath: '',
  });

  return (
    <ReplayInputWrapper>
      {props.codeValidation ? (
        <ReplayInputHeader>
          데이터 분석중 <RealTimeInfo>실시간</RealTimeInfo>
        </ReplayInputHeader>
      ) : (
        <ReplayInputHeader>분석할 리플레이 선택</ReplayInputHeader>
      )}
      {fileInfo.fileName === '' ? (
        <ReplayPreview />
      ) : (
        <GameInfo fileName={fileInfo.fileName} />
      )}
      <ReplayFileName setFileInfo={setFileInfo} />
    </ReplayInputWrapper>
  );
};
