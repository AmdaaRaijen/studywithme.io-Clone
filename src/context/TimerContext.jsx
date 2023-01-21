import { createContext, useMemo, useState } from "react";
import useLocalStorageState from "../hooks/useLocalStorage";

export const TimerContext = createContext();

export const TimerContextProvider = ({ children }) => {
  const [status, setStatus] = useState("pomodoro");
  const [defaultValue, setDefaultValue] = useLocalStorageState(
    "default-time-value",
    {
      pomodoro: 1500,
      short: 300,
      long: 600,
    }
  );
  const [times, setTimes] = useLocalStorageState("time-setting", {
    pomodoro: 1500,
    short: 300,
    long: 600,
  });
  const mode = useMemo(() => times[status], [status, times]);
  const [timeLeft, setTimeLeft] = useState(mode);
  const [isRunning, setIsRunning] = useState(false);

  return (
    <TimerContext.Provider
      value={{
        times,
        setTimes,
        status,
        setStatus,
        timeLeft,
        setTimeLeft,
        mode,
        isRunning,
        setIsRunning,
        defaultValue,
        setDefaultValue,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};
