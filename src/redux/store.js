import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./apis/authApi";
import { profileinfoApi } from "./profileinfoApi";
import { dailyinfoApi } from "./slices/dailyinfoApi";



const reduxStore = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [profileinfoApi.reducerPath]: profileinfoApi.reducer,
        [dailyinfoApi.reducerPath]: dailyinfoApi.reducer
    },
    middleware: def => [...def(), authApi.middleware],
    middleware: def => [...def(), profileinfoApi.middleware],
    middleware: def => [...def(), dailyinfoApi.middleware]
})

export default reduxStore