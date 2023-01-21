import React from "react";

const Setting_sound = () => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <p className="mb-1">Select alert sound:</p>
        <select className="select select-bordered w-full max-w-xs bg-black ">
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
      <div className="flex gap-4">
        <input type="checkbox" className="toggle" />
        <p className="text-white font-medium">Play sound when timer finishes</p>
      </div>
      <div>
        <p>Alert volume</p>
      </div>
    </div>
  );
};

export default Setting_sound;
