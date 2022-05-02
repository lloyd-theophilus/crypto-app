import { configureStore } from "@reduxjs/toolkit";

//Connecting the Api to the store
import { cryptoApi } from "../services/cryptoApi";

export const store = configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer
    },
})

export const {
    useGetCryptosQuery,
} = cryptoApi;