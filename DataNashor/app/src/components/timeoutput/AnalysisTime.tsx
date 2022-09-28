import { useState } from 'react';
import {
  TimeOutputWrapper,
  OutputFieldWrapper,
  OutputFieldWithColonWrapper,
  OutputField,
  Announcement,
} from './styles/analysisTime.s';

export const TimeOutput = () => {
  const [time, setTime] = useState(['1', '2', '1', '1']);

  return (
    <TimeOutputWrapper>
      <OutputFieldWrapper>
        {time.map((_, i) => {
          if (i === 2)
            return (
              <OutputFieldWithColonWrapper>
                :
                <OutputField
                  type={'text'}
                  maxLength={1}
                  key={i}
                  value={time[i]}
                />
              </OutputFieldWithColonWrapper>
            );
          return (
            <OutputField type={'text'} maxLength={1} key={i} value={time[i]} />
          );
        })}
      </OutputFieldWrapper>
      <Announcement>실시간 분석 진행중...</Announcement>
    </TimeOutputWrapper>
  );
};
