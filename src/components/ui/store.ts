import { create } from 'zustand';

interface MusicState {
  time: number;
  duration: number;
  isDragged: boolean;
  setTime: (time: number) => void;
  setDuration: (duration: number) => void;
  setIsDragged: (isDragged: boolean) => void;
}

const useMusicStore = create<MusicState>((set) => ({
  time: 0,
  duration: 100,
  isDragged: false,
  setTime: (time) => set({ time }),
  setDuration: (duration) => set({ duration }),
  setIsDragged: (isDragged) => set({ isDragged }),
}));

export default useMusicStore;
