import { configureStore } from "@reduxjs/toolkit";
import { moodSlice } from './data';
// import { pokemonApi } from "./data";

export const store = configureStore({
    reducer: moodSlice.reducer,
    // reducer: {
    //     [pokemonApi.reducerPath]: pokemonApi.reducer
    // },
    //     middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware().concat(pokemonApi.middleware),
})