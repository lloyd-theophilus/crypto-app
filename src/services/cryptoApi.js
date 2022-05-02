import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const cryptoApiHeaders = {
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  "X-RapidAPI-Key": "8c69d91bafmsh744b7417d5fe210p1cda15jsn6e78c70d07f7",
};

const baseUrl = "https://coinranking1.p.rapidapi.com/";

const createRequest = (url) => ({
    url,
    headers: cryptoApiHeaders,
})

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi;

/*
const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://coinranking1.p.rapidapi.com/coins',
  params: {
    referenceCurrencyUuid: 'yhjMzLPhuIDl',
    timePeriod: '24h',
    'tiers[0]': '1',
    orderBy: 'marketCap',
    orderDirection: 'desc',
    limit: '50',
    offset: '0'
  },
  headers: {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '8c69d91bafmsh744b7417d5fe210p1cda15jsn6e78c70d07f7'
  }
};
*/
