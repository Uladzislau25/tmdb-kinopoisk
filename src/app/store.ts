import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import {appReducer, appSlice} from "@/app/app-slice.ts";

export const store =  configureStore({
    reducer: {
        [appSlice.name]: appReducer
    },
})
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>


// @ts-ignore
window.store = store
setupListeners(store.dispatch)