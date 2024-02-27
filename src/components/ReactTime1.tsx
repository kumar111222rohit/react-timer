import React, { useState, useEffect, useMemo } from 'react';
import './styles.css';
interface TimeState {
  time: Date;
}

const CurrentTime: React.FC = () => {
  const [time, setTime] = useState<TimeState['time']>(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(intervalId);
  }, []);
  const color = useMemo(() => {
    const seconds = time.getSeconds();
    return seconds % 15 === 0
      ? 'purple'
      : seconds % 5 === 0
        ? 'blue'
        : seconds % 3 === 0
          ? 'red'
          : 'black';
  }, [time.getSeconds()]);

  console.log(color);
  return (
    <div className="time-container" style={{ color }}>
      {time.toLocaleTimeString()}
    </div>
  );
};

export default CurrentTime;
