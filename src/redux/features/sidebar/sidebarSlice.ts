import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IdFile {
    id: number;
    file: File;
}

interface SideBarState {
    files: IdFile[];
}

const initialState: SideBarState = {
    files: []
};

export const sidebarSlice = createSlice({
    name: "sidebar",
    initialState,
    reducers: {
        setFiles: (state, action: PayloadAction<IdFile[]>) => {
            state.files = [...state.files, ...action.payload];
        },
        removeFile: (state, action: PayloadAction<number>) => {
            state.files = state.files.filter((file) => {
                if (file.id !== action.payload) {
                    return file;
                }
            });
        }
    }
});

export const { setFiles, removeFile } = sidebarSlice.actions;

export default sidebarSlice.reducer;
