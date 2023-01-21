import React, { useContext, useState } from "react";
import { IoIosRefresh, IoMdSettings } from "react-icons/io";
import "../../index.css";
import Modal from "./Modal/Modal";

const Play = ({ handleStartStopTimer, isRunning, handleRestart }) => {
  return (
    <div className="flex gap-2 items-center">
      <div className="">
        {isRunning ? (
          <button
            onClick={handleStartStopTimer}
            className="text-[#181515] bg-white border-2 border-white p-2 rounded-full pr-[1rem] pl-[1rem] font-medium text-xl hover:bg-transparent hover:border-white hover:border-2 hover:text-white duration-100  ease-in active:bg-white active:text-[#181515]"
          >
            stop
          </button>
        ) : (
          <button
            onClick={handleStartStopTimer}
            className="text-[#181515] bg-white border-2 border-white p-2 rounded-full pr-[1rem] pl-[1rem] font-medium text-xl hover:bg-transparent hover:border-white hover:border-2 hover:text-white duration-100  ease-in active:bg-white active:text-[#181515] "
          >
            start
          </button>
        )}
      </div>
      <div className="text-white">
        <IoIosRefresh
          onClick={handleRestart}
          className="w-11 h-11 cursor-pointer"
        />
      </div>
      <div className="text-white">
        <label htmlFor="my-modal" className="btn modal-btn">
          <IoMdSettings className="w-11 h-11 cursor-pointer" />
        </label>
        <Modal />
      </div>
    </div>
  );
};

export default Play;
