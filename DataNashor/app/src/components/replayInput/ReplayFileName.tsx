import { ReplayFileNameWrapper } from './styles/replayFileName.s';
import { useState, useEffect, useCallback } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TargetBox } from '../replayInput/DnDTargetBox';

interface propsType {
  //부모 컴포넌트로 파일명 전달.
  setFileInfo: Function;
  setIsFileInput: Function;
}
export const ReplayFileName = (props: propsType) => {
  const handleFileDrop = useCallback((item: { files: any[] }) => {
    if (item) {
      props.setFileInfo({
        fileName: `${item.files[0].name}`,
        filePath: `${item.files[0].path}`,
      });
      props.setIsFileInput(true);
    }
  }, []);

  //ReplayFileNameWrapper
  return (
    <ReplayFileNameWrapper>
      <DndProvider backend={HTML5Backend}>
        <TargetBox onDrop={handleFileDrop} setFileInfo={props.setFileInfo} />
      </DndProvider>
    </ReplayFileNameWrapper>
  );
};
