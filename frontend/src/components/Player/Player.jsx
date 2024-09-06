import { useContext } from "react";
import { assets } from "../../assets/assets";
import { PlayerContext } from "../../context/PlayerConext";
import useMusicStore from "../../store/musicStore";
import usePlayMusic from "../../hooks/usePlaymusic";

const Player = () => {
  const {
    playsong,
    seekBar,
    seekBg,
    playStatus,
    play,
    pause,
    time,
    playNextFromQueue,
    playPreviousFromQueue,
    seekSong,
  } = useContext(PlayerContext);

  const defaultTrack = {
    coverImage: assets.img1, // Fallback image
    title: "No Track Playing",
    Artist: {
      name: "No info Available",
    },
  };

  const curretTrack = playsong || defaultTrack;
  return (
    <div className="h-[10%] bg-black flex  justify-between items-center text-white px-4 ">
      <div className="hidden lg:flex items-center gap-4 ">
        <img className="w-12" src={curretTrack.coverImage} alt="" />
        <div>
          <p>{curretTrack.title}</p>
          <p>{curretTrack.Artist.name}</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <img
            onClick={playPreviousFromQueue}
            className="w-4 cursor-pointer"
            src={assets.prev_icon}
            alt=""
          />
          {playStatus ? (
            <img
              onClick={pause}
              className="w-4 cursor-pointer"
              src={assets.pause_icon}
              alt=""
            />
          ) : (
            <img
              onClick={play}
              className="w-4 cursor-pointer"
              src={assets.play_icon}
              alt=""
            />
          )}

          <img
            onClick={playNextFromQueue}
            className="w-4 cursor-pointer"
            src={assets.next_icon}
            alt=""
          />
        </div>
        <div className="flex items-center gap-5">
          <p>
            {time.currentTime.minute}:{time.currentTime.second}
          </p>
          <div
            ref={seekBg}
            onClick={seekSong}
            className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer"
          >
            <hr
              ref={seekBar}
              className="h-1 border-none w-0 bg-green-800 rounded-full"
            />
          </div>
          <p>
            {time.totalTime.minute}:{time.totalTime.second}
          </p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-2 opacity-75 ">
        <img className="w-4" src={assets.queue_icon} alt="" />

        <img className="w-4" src={assets.volume_icon} alt="" />
        <div className="w-20 bg-slate-50 h-1 rounded"></div>
      </div>
    </div>
  );
};

export default Player;
