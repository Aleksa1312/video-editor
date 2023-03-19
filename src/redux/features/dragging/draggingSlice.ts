import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IdFile } from "../sidebar/sidebarSlice";

interface DraggingState {
    isDraggingFile: boolean;
    draggingFile: IdFile | null;
}

const initialState: DraggingState = {
    isDraggingFile: false,
    draggingFile: null
};

export const draggingSlice = createSlice({
    name: "fileDragging",
    initialState,
    reducers: {
        setIsDraggingFile: (state, action: PayloadAction<boolean>) => {
            state.isDraggingFile = action.payload;
        },
        setDraggingFile: (state, action: PayloadAction<IdFile>) => {
            state.draggingFile = action.payload;
        }
    }
});

export const { setIsDraggingFile, setDraggingFile } = draggingSlice.actions;

export default draggingSlice.reducer;
