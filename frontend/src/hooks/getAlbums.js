import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetAlbums = () => {
  const [loading, setLoading] = useState(false);
  const [album, setAlbum] = useState([]); // Initialize as an array to handle multiple albums

  useEffect(() => {
    const fetchAlbums = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/music/album"); // Add a leading slash to ensure proper API path
        const data = await res.json();
        if (res.ok) {
          setAlbum(data);
        } else {
          throw new Error(data.message || "Failed to fetch albums.");
        }
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAlbums();
  }, []);

  return { loading, album };
};

export default useGetAlbums;
