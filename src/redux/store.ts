import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./authSlice";
import { modalsReducer } from "./modalsSlice";
import { postsReducer } from "./postsSlice";

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        auth: authReducer,
        modals: modalsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch