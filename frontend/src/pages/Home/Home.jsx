import { useEffect } from "react";
import useMusicStore from "../../store/musicStore";
import AlbumItem from "../../components/AlbumItem";
import SongItem from "../../components/SongItem";
import Layout from "../../components/layout/layout";
import getAlbums from "../../hooks/getAlbums";
import useGetSongs from "../../hooks/useGetSongs";

const Home = () => {
  const { loading: loadingAlbums, album, error: albumError } = getAlbums();
  const { songs, loading: loadingSongs, error: songsError } = useGetSongs();
  const { setSelectedAlbum } = useMusicStore((state) => ({
    setSelectedAlbum: state.setSelectedAlbum,
  }));

  useEffect(() => {
    setSelectedAlbum(6);

    return () => {
      setSelectedAlbum(6);
    };
  }, [setSelectedAlbum]);

  if (loadingAlbums || loadingSongs) return <p>Loading...</p>;
  if (albumError) return <p>Error loading albums: {albumError.message}</p>;
  if (songsError) return <p>Error loading songs: {songsError.message}</p>;

  return (
    <Layout>
      <div className="mb-1">
        <h1 className="my-2 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto">
          {album.map((item) => (
            <AlbumItem
              key={item.id}
              name={item.title}
              id={item.id}
              desc={item.desc}
              image={item.albumCover}
            />
          ))}
        </div>
      </div>
      <div className="mb-1">
        <h1 className="my-5 font-bold text-2xl">Today's Biggest Hits</h1>
        <div className="flex overflow-auto">
          {songs.map((item) => (
            <SongItem
              key={item.id} // Use item.id as the key
              name={item.title}
              id={item.id}
              image={item.coverImage}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
