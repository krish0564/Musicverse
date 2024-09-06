/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";

import useMusicStore from "../store/musicStore";
import AlbumItem from "./Albumitem";

import SongItem from "./SongItem";
import Layout from "./layout/layout";

const DisplayHome = () => {
  const { albums, fetchAlbums, loadingAlbums, error, songs, fetchSongs } =
    useMusicStore((state) => ({
      albums: state.albums,
      songs: state.songs,
      fetchAlbums: state.fetchAlbums,
      fetchSongs: state.fetchSongs,
      loadingAlbums: state.loadingAlbums,
      error: state.error,
    }));
  useEffect(() => {
    fetchAlbums();
    fetchSongs();
  }, [fetchAlbums, fetchSongs]);

  if (loadingAlbums) return <p>Loading albums...</p>;
  console.log(albums, songs, fetchAlbums);

  return (
    <>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albums.map((item, index) => (
            <AlbumItem
              key={index}
              name={item.title}
              id={item.id}
              desc={item.desc}
              image={item.albumCover}
            />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Today's Biggest Hits</h1>
        <div className="flex overflow-auto">
          {songs.map((item, index) => (
            <SongItem
              key={index}
              name={item.title}
              id={item.id}
              image={item.coverImage}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
