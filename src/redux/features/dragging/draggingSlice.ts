import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IdFile } from "../sidebar/sidebarSlice";

interface DraggingState {
    isDragging: boolean;
    draggingFile: IdFile | null;
    timelineIsHover: boolean;
}

const initialState: DraggingState = {
    isDragging: false,
    draggingFile: null,
    timelineIsHover: false
};

export const draggingSlice = createSlice({
    name: "fileDragging",
    initialState,
    reducers: {
        setIsDragging: (state, action: PayloadAction<boolean>) => {
            state.isDragging = action.payload;
        },
        setDraggingFile: (state, action: PayloadAction<IdFile | null>) => {
            state.draggingFile = action.payload;
        }
    }
});

export const { setIsDragging, setDraggingFile } = draggingSlice.actions;

export default draggingSlice.reducer;
