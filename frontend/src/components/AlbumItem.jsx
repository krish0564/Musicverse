/* eslint-disable no-unused-vars */

import { useNavigate } from "react-router-dom";
import useMusicStore from "../store/musicStore";

/* eslint-disable react/prop-types */
const AlbumItem = ({ image, name, desc, id }) => {
  const { setSelectedAlbum } = useMusicStore((state) => ({
    setSelectedAlbum: state.setSelectedAlbum,
  }));
  const imageStyle = {
    width: "180px",
    height: "180px",
    objectFit: "cover",
    borderRadius: "8px",
  };
  const handleClick = () => {
    setSelectedAlbum(id);
    navigate(`/album/${id}`);
  };
  const navigate = useNavigate();
  return (
    <div
      onClick={handleClick}
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]"
    >
      <img className="rounded " src={image} style={imageStyle} />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  );
};

export default AlbumItem;
