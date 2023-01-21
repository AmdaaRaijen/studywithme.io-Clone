import React, { useEffect } from "react";
import { useContext } from "react";
import { BackgroundContext } from "/src/context/BackgroundContext";

const Setting_general = () => {
  const { backgroundName, setBackgroundName } = useContext(BackgroundContext);

  function handleSelected(e) {
    setBackgroundName(e.target.value);
  }

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="font-medium mb-1">Select Theme:</h2>
        <select
          className="select select-bordered w-full max-w-xs bg-black "
          value={backgroundName}
          onChange={handleSelected}
        >
          <option className="font-medium" value="Rainy late night">
            Rainy late night
          </option>
          <option className="font-medium" value="Tokyo afternoon">
            Tokyo afternoon
          </option>
          <option className="font-medium" value="Night Kingdom">
            Night Kingdom
          </option>
          <option className="font-medium" value="Spooky japan">
            Spooky japan
          </option>
        </select>
      </div>
      <div className="flex flex-col gap-3 mt-3 max-w-xs">
        <div className="flex gap-4 items-center">
          <input type="checkbox" className="toggle" />
          <p className="text-white font-medium">
            Show browser notification when timer finishes{" "}
            <span className="text-slate-400"> (beta)</span>
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <input type="checkbox" className="toggle" />
          <p className="text-white font-medium">Show Spotify playlist</p>
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-4 max-w-[25rem]">
        <p>
          Have feature requests, or an issue to report? Fill out our quick
          feedback form here and join our Discord Community.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          ab!
        </p>
      </div>
    </div>
  );
};

export default Setting_general;
