import React from "react";
import Setting_general from "./Setting_general";
import Setting_sound from "./Setting_sound";
import Setting_timer from "./Setting_timer";

const Setting_text = ({ selected }) => {
  return (
    <div className="min-w-full ">
      {selected === "general" ? (
        <Setting_general />
      ) : selected === "timers" ? (
        <Setting_timer />
      ) : (
        <Setting_sound />
      )}
    </div>
  );
};

export default Setting_text;
