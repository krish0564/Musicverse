/* eslint-disable react/prop-types */
import { useContext } from "react";
import { PlayerContext } from "../context/PlayerConext";
import useMusicStore from "../store/musicStore";

const SongItem = ({ name, image, desc, id }) => {
  const { playWithId } = useContext(PlayerContext);
  const { setSongQueue, songs } = useMusicStore();
  const handlePlay = () => {
    setSongQueue(songs);
    playWithId(id);
  };
  return (
    <div
      onClick={handlePlay}
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]"
    >
      <img className="rounded" src={image} alt="" />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  );
};

export default SongItem;
