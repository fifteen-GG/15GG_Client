import type { FC } from 'react';
import type { DropTargetMonitor } from 'react-dnd';
import { useDrop } from 'react-dnd';
import { NativeTypes } from 'react-dnd-html5-backend';
import { DropZone } from './styles/replayFileName.s';
import { useState } from 'react';

export interface TargetBoxProps {
  onDrop: (item: { files: File[] }) => void;
  setFileInfo: Function;
}

export const TargetBox: FC<TargetBoxProps> = props => {
  let [anouncement, setAnouncement] =
    useState<string>('드래그 해서 파일 업로드');
  const { onDrop } = props;
  const [{ canDrop, isOver }, drop] = useDrop(
    () => ({
      accept: [NativeTypes.FILE],
      drop(item: { files: File[] }) {
        if (onDrop) {
          onDrop(item);
          setAnouncement(item.files[0].name);
        }
      },
      collect: (monitor: DropTargetMonitor) => {
        return {
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop(),
        };
      },
    }),
    [props],
  );
  const isActive = canDrop && isOver;
  const onChange = (e: any) => {
    //e:any 타입지정이 e: React.ChangeEvent<HTMLInputElement> 이런식으로 지정해버리면
    //inputElement 의 file 로 접근되는데, 웹브라우저 기반 react 에서는 file의 path 에 대한 접근을 보안상 차단하고 있대
    //그래서 any 타입으로 event 에 접근해서 꼼수 식으로 path 로 접근하니까 되네.. 이건나중에 함 확인좀 해주세요
    props.setFileInfo({
      fileName: `${e.target.files[0].name}`,
      filePath: `${e.target.files[0].path}`,
    });
    setAnouncement(e.target.files[0].name);
    console.log(e.target.files[0].name);
    console.log(e.target.files[0].path);
  };

  return (
    <label htmlFor="inputfile" style={{ width: '100%', height: '100%' }}>
      <DropZone ref={drop} isActive={isActive}>
        {anouncement}
        <input
          id="inputfile"
          type="file"
          onChange={e => onChange(e)}
          style={{ display: 'none', width: '100%', height: '100%' }}
        />
      </DropZone>
    </label>
  );
};
