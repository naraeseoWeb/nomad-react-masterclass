import React from 'react';
import { useRecoilState } from 'recoil';
import { hourSelector, minuteState } from './atoms';

const App = () => {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const [hours, setHours] = useRecoilState(hourSelector);
  const onMinuteChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
  };
  const onHourChange = (event: React.FormEvent<HTMLInputElement>) => {
    setHours(+event.currentTarget.value);
  };

  return (
    <div>
      <input
        value={minutes}
        onChange={onMinuteChange}
        type='number'
        placeholder='Minutes'
      />
      <input
        value={hours}
        onChange={onHourChange}
        type='number'
        placeholder='Hours'
      />
    </div>
  );
};

export default App;
