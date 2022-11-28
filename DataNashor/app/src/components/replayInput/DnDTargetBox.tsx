import type { FC } from 'react';
import type { DropTargetMonitor } from 'react-dnd';
import { useDrop } from 'react-dnd';
import { NativeTypes } from 'react-dnd-html5-backend';
import { InputField } from './styles/replayFileName.s';
import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setReplayName } from '../../redux/Actions';

const { ipcRenderer } = window.require('electron');

export interface TargetBoxProps {
  onDrop: (item: { files: any[] }) => void;
  setFileInfo: Function;
}

export const TargetBox: FC<TargetBoxProps> = props => {
  const dispatch = useDispatch();
  let [anouncement, setAnouncement] = useState('드래그 해서 파일 업로드');
  const { onDrop } = props;
  const [{ canDrop, isOver }, drop] = useDrop(
    () => ({
      accept: [NativeTypes.FILE],
      drop(item: { files: any[] }) {
        if (onDrop) {
          onDrop(item);
          setAnouncement(item.files[0].name);
        }
      },
      collect: (monitor: DropTargetMonitor) => {
        const item = monitor.getItem() as any;

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
    props.setFileInfo({
      fileName: `${e.target.files[0].name}`,
      filePath: `${e.target.files[0].path}`,
    });
    setAnouncement(e.target.files[0].name);
    dispatch(setReplayName(e.target.files[0].name));
    ipcRenderer.send('MATCH_FROM_BACKGROUND', {
      message: e.target.files[0].name,
    });
  };

  return (
    <label htmlFor="inputfile" style={{ width: '100%', height: '100%' }}>
      <InputField ref={drop} isActive={isActive}>
        {anouncement}
        <input
          id="inputfile"
          type="file"
          onChange={e => onChange(e)}
          style={{ display: 'none', width: '100%', height: '100%' }}
        />
      </InputField>
    </label>
  );
};
