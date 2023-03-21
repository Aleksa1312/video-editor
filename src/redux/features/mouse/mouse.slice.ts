import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MouseState {
    x: number;
    y: number;
}

const initialState: MouseState = {
    x: 0,
    y: 0
};

export const mouseSlice = createSlice({
    name: "mouse",
    initialState,
    reducers: {
        setMouseX: (state, action: PayloadAction<number>) => {
            state.x = action.payload;
        },
        setMouseY: (state, action: PayloadAction<number>) => {
            state.y = action.payload;
        }
    }
});

export const { setMouseX, setMouseY } = mouseSlice.actions;

export default mouseSlice.reducer;
