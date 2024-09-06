import { useContext } from "react";
import Player from "../Player/Player";
import Sidebar from "../sidebar/Sidebar";
import { PlayerContext } from "../../context/PlayerConext";
import Navbar from "../Navbar";

const Layout = ({ children }) => {
  const { audioRef } = useContext(PlayerContext);
  return (
    <div className="h-screen bg-[#121212]  ">
      <div className="h-[90%] flex ">
        <div className="w-[25%]">
          <Sidebar />
        </div>
        <div className=" w-4/5 flex-r">
          <Navbar />
          <div className="h-[90%] text-white overflow-auto">{children}</div>
        </div>
      </div>
      <Player />
      <audio ref={audioRef} preload="auto" />
    </div>
  );
};

export default Layout;
