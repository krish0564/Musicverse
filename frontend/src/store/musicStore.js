import { create } from "zustand";
const useMusicStore = create((set) => ({
  songs: [],
  playsong: null,
  songQueue: [],
  album: 6,
  setSelectedAlbum: (album) => set({ album }),
  setSelectedSongs: (songs) => set({ songs }),
  setPlaysong: (playsong) => set({ playsong }),
  setSongQueue: (songQueue) => set({ songQueue }),
  clearSongQueue: () => set({ songQueue: [] }),
  genre: [],
  playlist: [],

  loadingSongs: false,
  loadingAlbums: false,
  error: null,
}));

export default useMusicStore;
