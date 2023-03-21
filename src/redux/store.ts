import { configureStore } from "@reduxjs/toolkit";
import draggingSlice from "./features/dragging/draggingSlice";
import sidebarSlice from "./features/sidebar/sidebarSlice";
import mouseSlice from "./features/mouse/mouse.slice";

const store = configureStore({
    reducer: {
        dragging: draggingSlice,
        sidebar: sidebarSlice,
        mouse: mouseSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
