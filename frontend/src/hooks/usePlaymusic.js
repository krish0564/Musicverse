import { useEffect, useState, useRef } from "react";
import useMusicStore from "../store/musicStore";

const usePlayMusic = () => {
  const {
    playsong,
    songQueue,
    setPlaysong,

    clearSongQueue,
  } = useMusicStore((state) => ({
    playsong: state.playsong,
    songQueue: state.songQueue,
    setPlaysong: state.setPlaysong,
    setSongQueue: state.setSongQueue,
    clearSongQueue: state.clearSongQueue,
  }));

  const audioRef = useRef(null);
  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: { second: 0, minute: 0 },
    totalTime: { second: 0, minute: 0 },
  });
  const seekBg = useRef();
  const seekBar = useRef();

  const play = () => {
    if (playsong && playsong.file) {
      audioRef.current.play();
      setPlayStatus(true);
    } else {
      console.error("No track available to play.");
    }
  };

  const pause = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  };

  const playWithId = (id) => {
    console.log("Playing song with ID:", id);

    // Ensure songQueue is not empty and contains the track
    if (!songQueue || songQueue.length === 0) {
      console.error("Song queue is empty.");
      return;
    }

    const selectedTrack = songQueue.find((track) => track.id === id);
    console.log("Selected track:", selectedTrack);

    if (selectedTrack) {
      if (audioRef.current) {
        audioRef.current.pause(); // Pause any current track
        audioRef.current.src = selectedTrack.file;
        audioRef.current.load(); // Load the new track
        play(); // Play the new track
        setPlaysong(selectedTrack);
        // Update the playsong state
      } else {
        console.error(
          "audioRef.current is null. Ensure the <audio> element is rendered."
        );
      }
    } else {
      console.error("Track not found in the song list.");
    }
  };

  const playNextFromQueue = () => {
    const currentIndex = songQueue.findIndex((song) => song.id === playsong.id);
    if (currentIndex < songQueue.length - 1) {
      playWithId(songQueue[currentIndex + 1].id);
    } else {
      console.log("End of queue");
      clearSongQueue(); // Clear the queue when done
    }
  };
  const playPreviousFromQueue = () => {
    const currentIndex = songQueue.findIndex((song) => song.id === playsong.id);
    if (currentIndex > 0) {
      playWithId(songQueue[currentIndex - 1].id);
    } else {
      console.log("Start of queue");
      // Optionally, you can handle the case where there's no previous song
    }
  };

  const seekSong = (e) => {
    audioRef.current.currentTime =
      (e.nativeEvent.offsetX / seekBg.current.offsetWidth) *
      audioRef.current.duration;
  };

  // Play next song when the current song ends
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.onended = playNextFromQueue;

      audioRef.current.ontimeupdate = () => {
        seekBar.current.style.width =
          (audioRef.current.currentTime / audioRef.current.duration) * 100 +
          "%";
        setTime({
          currentTime: {
            second: Math.floor(audioRef.current.currentTime % 60),
            minute: Math.floor(audioRef.current.currentTime / 60),
          },
          totalTime: {
            second: Math.floor(audioRef.current.duration % 60),
            minute: Math.floor(audioRef.current.duration / 60),
          },
        });
      };
    }
  }, [playsong, songQueue]);

  return {
    playsong,
    audioRef,
    play,
    pause,
    playWithId,
    playNextFromQueue,
    playPreviousFromQueue,
    playStatus,
    time,
    seekBar,
    seekBg,
    seekSong,
  };
};

export default usePlayMusic;
