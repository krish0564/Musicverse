import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useMusicStore from "../store/musicStore";

const useGetSongs = () => {
  const [loading, setLoading] = useState(false);
  const { songs, album, setSelectedSongs } = useMusicStore((state) => ({
    songs: state.songs,
    album: state.album,
    setSelectedSongs: state.setSelectedSongs,
  }));

  useEffect(() => {
    const getSongs = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/music/album/${album}`);

        if (!res.ok) {
          throw new Error(
            `Error fetching songs: ${res.status} ${res.statusText}`
          );
        }

        const contentType = res.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Received non-JSON response");
        }

        const data = await res.json();

        if (data.error) {
          throw new Error(data.error);
        }

        setSelectedSongs(data);
      } catch (error) {
        toast.error(error.message);
        console.error("Error fetching songs:", error);
      } finally {
        setLoading(false);
      }
    };

    if (album) {
      getSongs();
    }
  }, [album, setSelectedSongs]);

  return { songs, loading };
};

export default useGetSongs;
