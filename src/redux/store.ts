import { configureStore } from "@reduxjs/toolkit";

import VideoPlayerSlice from "./features/VideoPlayer/VideoPlayerSlice";
import TimelineSlice from "./features/Timeline/TimelineSlice";

const store = configureStore({
    reducer: {
        videoPlayer: VideoPlayerSlice,
        timeline: TimelineSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
