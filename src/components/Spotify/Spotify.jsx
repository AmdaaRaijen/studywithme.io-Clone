import React, { useRef, useState } from "react";
import { VscDebugStart, VscDebugPause } from "react-icons/vsc";
import { BsFillSkipStartFill } from "react-icons/bs";
import Marquee from "react-fast-marquee";

const Spotify = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audio = useRef();

  function handlePlay() {
    if (!isPlaying) {
      console.log(audio.current.play());
      setIsPlaying(true);
    } else {
      console.log(audio.current.pause());
      setIsPlaying(false);
    }
  }

  return (
    <div className="w-72 h-20 rounded-xl bg-[#282828] absolute bottom-9 left-9 flex items-center overflow-hidden">
      <div className="flex flex-row items-center justify-between gap-2">
        <div className="bg-[#00feae] p-9 rounded-md ml-2 hover:bg-[#00cd8c] duration-150  ease-in"></div>
        <div className="min-w-[16rem] text-[14px]">
          <Marquee
            gradient={true}
            loop="3"
            gradientColor={[40, 40, 40]}
            gradientWidth="2px"
            className="bg-transparent  inline-block font-semibold text-white max-w-[10rem]"
            speed={50}
          >
            Angel (feat. Cak Percil)
          </Marquee>
          <p className="text text-[#989898] text-[12px] font-semibold">
            Artist
          </p>
          <div className="max-w-max flex justify-between gap-8 items-center">
            <div className="flex items-center  pr-[5px] pl-[5px] h-5 bg-[#bfbfbf] rounded-[4px] ">
              <p className="text-[10px] text-[#232323] font-bold">PREVIEW</p>
            </div>
            {/* PREV NEXT OPTION START opentag*/}
            <div className="flex gap-2 items-center">
              <div className="flex text-[#626262]">
                <BsFillSkipStartFill className="w-5 h-5" />
                <BsFillSkipStartFill className="rotate-180 w-5 h-5" />
              </div>
              <div>
                <p className="text-[#a3a3a3] text-[18px] font-bold">...</p>
              </div>
              <div
                onClick={handlePlay}
                className="p-2 bg-black rounded-full cursor-pointer"
              >
                {isPlaying ? (
                  <VscDebugPause className="text-white active:text-[#00cd8c]  w-4 h-4" />
                ) : (
                  <VscDebugStart className="text-white active:text-[#00cd8c]  w-4 h-4" />
                )}
                <audio ref={audio} src="/MUSIC_Angel.mp3" />
              </div>
            </div>
            {/* PREV NEXT OPTION START closetag */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spotify;
