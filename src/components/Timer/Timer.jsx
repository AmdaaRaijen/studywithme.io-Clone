import React, { useContext, useEffect, useRef, useState } from "react";
import { TimerContext } from "../../context/TimerContext";
import Play from "../Play/Play";

const Timer = () => {
  const {
    status,
    setStatus,
    timeLeft,
    setTimeLeft,
    mode,
    isRunning,
    setIsRunning,
    times,
    setTimes,
  } = useContext(TimerContext);
  const [intervalId, setIntervalId] = useState(null);

  const timer = useRef();

  let id;
  useEffect(() => {
    if (isRunning) {
      timer.current = setInterval(() => {
        let newTime = times[status];
        if (newTime > 0) {
          newTime--;
          setTimes({ ...times, [status]: newTime });
        } else {
          clearInterval(id);
          setIsRunning(false);
        }
      }, 1000);
      setIntervalId(timer.current);
    }
    return () => clearInterval(intervalId);
  }, [times, isRunning]);

  function handleStartStopTimer() {
    setIsRunning(!isRunning);
    if (!isRunning) {
      clearInterval(intervalId);
      setStatus(status);
    }
  }

  function handleRestart() {
    setIsRunning(false);
    setTimeLeft(mode);
    setTimes({
      pomodoro: 1500,
      short: 300,
      long: 600,
    });
    clearInterval(intervalId);
  }

  const minutes = Math.floor(times[status] / 60);
  const seconds = times[status] % 60;

  return (
    <>
      <div className="text-9xl font-semibold text-white">
        {`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`}
      </div>
      <Play
        handleStartStopTimer={handleStartStopTimer}
        isRunning={isRunning}
        handleRestart={handleRestart}
      />
    </>
  );
};

export default Timer;
