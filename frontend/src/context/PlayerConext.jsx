/* eslint-disable react/prop-types */
import { createContext, useEffect, useRef, useState } from "react";

import useMusicStore from "../store/musicStore";
import usePlayMusic from "../hooks/usePlaymusic";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const {
    playsong,
    audioRef,
    play,
    pause,
    playWithId,
    playNextFromQueue,
    playPreviousFromQueue,
    playStatus,
    time,
    seekSong,
    seekBar,
    seekBg,
  } = usePlayMusic();

  const contextValue = {
    audioRef,
    play,
    pause,
    playWithId,
    playNextFromQueue,
    playPreviousFromQueue,
    playStatus,
    time,
    seekSong,
    seekBar,
    seekBg,
    playsong,
  };
  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};
export default PlayerContextProvider;
