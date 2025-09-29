import { makeAutoObservable } from "mobx";

class MusicPlayerStore {
    isPlaying: boolean = false;
    currentTrack: string | null = null;

    constructor() {
        makeAutoObservable(this); //весь текущий объект будет наблюдаемым
    }

    play(track: string) {
        this.currentTrack = track;
        this.isPlaying = true;
        console.log(`Playing ${track}`);
    }
}

export const musicPlayerStore = new MusicPlayerStore();