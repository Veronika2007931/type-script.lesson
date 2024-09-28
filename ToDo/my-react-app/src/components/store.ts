import { configureStore } from "@reduxjs/toolkit";
import { toDoSlice } from "./slice";

export const store = configureStore({
    reducer: {
        todos: toDoSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>