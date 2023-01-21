import React, { useContext, useState } from "react";
import { TimerContext } from "../../context/TimerContext";

const Button = () => {
  const { status, setStatus, setIsRunning } = useContext(TimerContext);
  return (
    <div className="flex gap-2">
      <button
        onClick={() => {
          setStatus("pomodoro");
          setIsRunning(false);
        }}
        className={` border-2 border-white  ${
          status === "pomodoro" ? "bg-white text-[#181515] " : "text-white"
        } p-2  rounded-full pr-[1rem] pl-[1rem] font-medium hover:bg-white hover:text-[#181515] duration-100  ease-in`}
      >
        pomodoro
      </button>
      <button
        onClick={() => {
          setStatus("short");
          setIsRunning(false);
        }}
        className={` ${
          status === "short" ? "bg-white text-[#181515]" : "text-white"
        } p-2 rounded-full pr-[1rem] pl-[1rem] font-medium border-2 border-white hover:bg-white hover:text-[#181515] duration-100  ease-in`}
      >
        short break
      </button>
      <button
        onClick={() => {
          setStatus("long");
          setIsRunning(false);
        }}
        className={` ${
          status === "long" ? "bg-white text-[#181515]" : "text-white"
        } p-2 rounded-full pr-[1rem] pl-[1rem] font-medium border-2 border-white hover:bg-white hover:text-[#181515] duration-100  ease-in`}
      >
        long break
      </button>
    </div>
  );
};

export default Button;
