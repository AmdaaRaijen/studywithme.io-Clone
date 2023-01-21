import { useContext, useEffect, useMemo, useState } from "react";
import Button from "./components/Type/Button";
import Spotify from "./components/Spotify/Spotify";
import Timer from "./components/Timer/Timer";
import "./index.css";
import DataBg from "./components/Data/DataBg";
import { BackgroundContext } from "./context/BackgroundContext";
import { TimerContext } from "./context/TimerContext";

function App() {
  const { status, setTimeLeft, mode, intervalId, setIsRunning } =
    useContext(TimerContext);

  const [background, setBackground] = useState("Rainy late night");
  const { backgroundName } = useContext(BackgroundContext);

  function handleBackground(backgroundName) {
    DataBg.forEach((item) => {
      if (item.name === backgroundName) {
        setBackground(item.URL);
      }
    });
  }

  useEffect(() => {
    setTimeLeft(mode);
    clearInterval(intervalId);
    handleBackground(backgroundName);
  }, [status, mode, intervalId, background, backgroundName]);

  const mystyle = {
    backgroundImage: `url("${background}")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div>
      <div
        className="w-screen h-screen flex items-center justify-center flex-col bg-[#181515] gap-12 "
        style={mystyle}
        loading="lazy"
      >
        <Button />
        <Timer />
        <Spotify />
      </div>
    </div>
  );
}

export default App;
