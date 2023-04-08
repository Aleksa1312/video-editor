import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TimelineState {
    length: number; // represents the total size of the timeline
    needlePosition: number; // represents the position of the needle on the timeline
    previewPosition: number; // represents the coordinates of the preview line in timeline
    needleIsDrag: boolean; // represents the dragging state of the needle
    needleIsHover: boolean;
}

const initialState: TimelineState = {
    length: 30000,
    needlePosition: 0,
    previewPosition: 0,
    needleIsDrag: false,
    needleIsHover: false,
};

export const TimelineSlice = createSlice({
    name: "Timeline",
    initialState,
    reducers: {
        setLength: (state, action: PayloadAction<number>) => {
            state.length = action.payload;
        },
        setNeedlePosition: (state, action: PayloadAction<number>) => {
            state.needlePosition = action.payload;
        },
        setNeedleIsDrag: (state, action: PayloadAction<boolean>) => {
            state.needleIsDrag = action.payload;
        },
        setPreviewPosition: (state, action: PayloadAction<number>) => {
            state.previewPosition = action.payload;
        },
        setNeedleIsHover: (state, action: PayloadAction<boolean>) => {
            state.needleIsHover = action.payload;
        },
    },
});

export const {
    setLength,
    setNeedlePosition,
    setNeedleIsDrag,
    setPreviewPosition,
    setNeedleIsHover,
} = TimelineSlice.actions;

export default TimelineSlice.reducer;
