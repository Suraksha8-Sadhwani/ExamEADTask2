import React, { useState, useEffect } from 'react';

function Timer() {
  const [time, setTime] = useState(10);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (time === 0) {
      setTime('Times up!');
    }
  }, [time]);

  return (
    <div>
      <h1>Timer: {time}</h1>
    </div>
  );
}

export default Timer;
