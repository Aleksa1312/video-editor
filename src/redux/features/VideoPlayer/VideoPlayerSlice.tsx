import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface VideoPlayerState {
    isPaused: boolean; // is the player paused or playing
    time: number; // number between 0 and max video length
    percent: number; // between 0 and 1
    videoUrl: string | null; // the url object of the video file
}

const initialState: VideoPlayerState = {
    isPaused: false,
    time: 0,
    percent: 0,
    videoUrl: null,
};

export const VideoPlayerSlice = createSlice({
    name: "VideoPlayer",
    initialState,
    reducers: {
        togglePause: (state) => {
            state.isPaused = !state.isPaused;
        },
        setPause: (state, action: PayloadAction<boolean>) => {
            state.isPaused = action.payload;
        },
        setVideoUrl: (state, action: PayloadAction<string>) => {
            state.videoUrl = action.payload;
        },
    },
});

export const { togglePause } = VideoPlayerSlice.actions;

export default VideoPlayerSlice.reducer;
