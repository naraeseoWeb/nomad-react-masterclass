import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { hourSelector, minuteState } from './atoms';

const App = () => {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const hours = useRecoilValue(hourSelector);
  const onMinuteChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
  };

  return (
    <div>
      <input
        value={minutes}
        onChange={onMinuteChange}
        type='number'
        placeholder='Minutes'
      />
      <input value={hours} type='number' placeholder='Hours' />
    </div>
  );
};

export default App;
