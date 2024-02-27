import React, { useState, useEffect } from 'react';
import './styles.css';

const MouseMoveTimer: React.FC = () => {
  const [time, setTime] = useState<number>(0);

  // State to store the active/inactive status of mouse
  const [active, setActive] = useState<boolean>(false);

  // State to store the timeout ID for detecting stoppage
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let lastTime = Date.now();

    const handleMouseMove = (event: MouseEvent) => {
      setActive(true);
      const now = Date.now();
      const deltaTime = (now - lastTime) / 1000; // Calculate delta in seconds
      lastTime = now;

      const { clientY } = event;
      const windowHeight = window.innerHeight;
      const isInTopHalf = clientY < windowHeight / 2;

      setTime(prevTime => {
        return isInTopHalf
          ? prevTime + deltaTime
          : Math.max(0, prevTime - deltaTime);
      });

      // Clear existing timeout and set a new one to detect stoppage
      if (timeoutId) clearTimeout(timeoutId);
      const newTimeoutId = setTimeout(() => {
        setActive(false); // Disable the timer after a period of no movement
      }, 200); // Set to 200ms or another suitable value
      setTimeoutId(newTimeoutId);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  return (
    <div className="mouse-timer-container" data-testid="mouse-container">
      <hr className="hr" />
      <h2>Mouse Move Timer</h2>
      <p>Time: {time.toFixed(2)} seconds</p>
      <p>{active ? 'Active' : 'Inactive'}</p>
    </div>
  );
};

export default MouseMoveTimer;
