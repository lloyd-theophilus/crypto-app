import { configureStore } from "@reduxjs/toolkit";

//Connecting the Api to the store
import { cryptoApi } from "../services/cryptoApi";
import { cryptoNewsApi } from "../services/cryptoNewsApi";

export const store = configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer
    },
})

export const {
    useGetCryptosQuery,
} = cryptoApi;