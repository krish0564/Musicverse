import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Display from "../../components/Display";
import Player from "../../components/Player/Player";
import Sidebar from "../../components/sidebar/Sidebar";
import { PlayerContext } from "../../context/PlayerConext";

const Home = () => {
  const { audioRef, track } = useContext(PlayerContext);
  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex ">
        <Sidebar />
        <Display />
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload="auto"></audio>
      <Outlet /> {/* This will render nested routes */}
    </div>
  );
};

export default Home;
