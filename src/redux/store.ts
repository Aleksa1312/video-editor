import { configureStore } from "@reduxjs/toolkit";
import draggingSlice from "./features/dragging/draggingSlice";
import sidebarSlice from "./features/sidebar/sidebarSlice";

const store = configureStore({
    reducer: {
        dragging: draggingSlice,
        sidebar: sidebarSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
