import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TimelineState {
    length: number; // represents the total size of the timeline
    needlePosition: number; // represents the position of the needle on the timeline
}

const initialState: TimelineState = {
    length: 30000,
    needlePosition: 0,
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
    },
});

export const { setLength, setNeedlePosition } = TimelineSlice.actions;

export default TimelineSlice.reducer;
