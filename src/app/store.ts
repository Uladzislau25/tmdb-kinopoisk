import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import {appReducer, appSlice} from "@/app/app-slice.ts";
import {moviesApi} from "@/app/moviesApi.ts";

export const store =  configureStore({
    reducer: {
        [appSlice.name]: appReducer,
        [moviesApi.reducerPath]: moviesApi.reducer,
    },
middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(moviesApi.middleware)
})
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>


// @ts-ignore
window.store = store
setupListeners(store.dispatch)