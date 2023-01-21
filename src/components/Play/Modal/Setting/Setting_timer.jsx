import React, { useContext, useEffect } from "react";
import { TimerContext } from "../../../../context/TimerContext";

const Setting_timer = () => {
  const { times, setTimes } = useContext(TimerContext);

  return (
    <div>
      <div className="flex flex-col gap-10">
        <div className="flex gap-6">
          <div className="flex flex-col">
            <h2 className="font-medium mb-1">Pomodoro</h2>
            <input
              type="number"
              className="input input-bordered w-20"
              defaultValue={times.pomodoro / 60}
              name="pomodoro"
              onChange={(e) =>
                setTimes({ ...times, pomodoro: e.target.value * 60 })
              }
            />
            <p>minutes</p>
          </div>
          <div className="flex flex-col">
            <h2 className="font-medium mb-1">Short Break</h2>
            <input
              type="number"
              className="input input-bordered w-20"
              name="short"
              defaultValue={times.short / 60}
              onChange={(e) =>
                setTimes({ ...times, short: e.target.value * 60 })
              }
            />
            <p>minutes</p>
          </div>
          <div className="flex flex-col">
            <h2 className="font-medium mb-1">Long Break</h2>
            <input
              type="number"
              className="input input-bordered w-20"
              name="long"
              defaultValue={times.long / 60}
              onChange={(e) =>
                setTimes({ ...times, long: e.target.value * 60 })
              }
            />
            <p>minutes</p>
          </div>
        </div>
        <div className="flex gap-4">
          <input type="checkbox" className="toggle" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ipsa
            nam ex quasi, culpa et earum eligendi officia in eaque!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Setting_timer;
