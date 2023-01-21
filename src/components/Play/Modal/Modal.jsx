import React, { useContext, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "../../../index.css";
import Setting_text from "./Setting/Setting";
const Modal = () => {
  const [selected, setSelected] = useState("general");

  return (
    <div className=" ">
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal text-black ">
        <div className="modal-box absolute top-28 text-white  min-w-[40rem]">
          <div className="flex justify-end">
            <label htmlFor="my-modal">
              <AiOutlineClose className="w-8 h-8 text-[#a8a8a8] hover:text-[#dcdcdc]" />
            </label>
          </div>
          <div className="flex gap-5 mt-5 overflow-hidden">
            <div className="flex flex-col ">
              <p
                onClick={() => setSelected("general")}
                className={`cursor-pointer p-1 font-medium pr-10 pl-3 ${
                  selected === "general" ? "rounded-md text-black bg-white" : ""
                } `}
              >
                General
              </p>
              <p
                onClick={() => setSelected("timers")}
                className={`cursor-pointer p-2 font-medium pr-10 pl-3 ${
                  selected === "timers" ? "rounded-md text-black bg-white" : ""
                } `}
              >
                Timers
              </p>
              <p
                onClick={() => setSelected("sounds")}
                className={`cursor-pointer p-2 font-medium pr-10 pl-3 ${
                  selected === "sounds" ? "rounded-md text-black bg-white" : ""
                } `}
              >
                Sounds
              </p>
            </div>
            <div className="min-w-full ">
              <Setting_text selected={selected} />
            </div>
          </div>
          <div className="modal-action"></div>
          <div className="flex justify-between">
            <button className="btn btn-outline btn-error">Reset All</button>
            <div className="flex gap-4">
              <label htmlFor="my-modal">
                <div className="btn ">Close</div>
              </label>
              <label htmlFor="my-modal">
                <div className="btn btn-outline btn-active">Save Change</div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
