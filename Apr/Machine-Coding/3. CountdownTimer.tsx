import React, { useState, useEffect, useRef } from "react";

const CountdownTimer = () => {
  const initialTimer = 300;
  const [time, setTime] = useState(initialTimer);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const onStart = () => {
    if (isRunning || time <= 0) return;
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current); // cleanup on unmount
  }, []);

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div>
      <h2>Countdown Timer</h2>
      <div style={{ fontSize: "2rem", margin: "1rem 0" }}>
        {formatTime(time)}
      </div>
      <button onClick={onStart} disabled={isRunning || time === 0}>
        {time === 0 ? "Finished" : isRunning ? "Running..." : "Start"}
      </button>
    </div>
  );
};

export default CountdownTimer;
