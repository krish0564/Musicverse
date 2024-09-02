import create from "zustand";
const useMusicStore = create((set) => ({
  songs: [],
  albums: [],
  genre: [],
  playlist: [],

  loadingSongs: false,
  loadingAlbums: false,
  error: null,
  fetchSongs: async () => {
    set({ loadingSongs: true });
    try {
      const response = await fetch("api/music/album/6");
      const data = await response.json();
      set({ songs: data, loadingSongs: false });
    } catch (error) {
      set({ error: error.message, loadingSongs: false });
    }
  },
  fetchAlbums: async () => {
    set({ loadingAlbums: true });
    try {
      const response = await fetch("api/music/album");
      const data = await response.json();
      set({ albums: data, loadingAlbums: false });
    } catch (error) {
      set({ error: error.message, loadingAlbums: false });
    }
  },
}));

export default useMusicStore;
