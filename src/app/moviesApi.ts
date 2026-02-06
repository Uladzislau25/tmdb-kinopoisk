import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import type {SearchMoviesParams, SearchResponse} from "@/app/moviesApi.types.ts";


export const moviesApi = createApi({
    reducerPath: "moviesApi",
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_BASE_URL }),
    endpoints: (build) => ({
        getPopularMovies: build.query<SearchResponse, void>({
            query: () => ({
                url: "movie/popular",
                params: {
                    api_key: import.meta.env.VITE_API_KEY,
                    language: "en-US",
                    page: 1,
                },
            }),
        }),
        searchMovies: build.query<SearchResponse, SearchMoviesParams>({
            query: ({query, page = 1}) => ({
                url: "search/movie",
                params: {
                    api_key: import.meta.env.VITE_API_KEY,
                    query,
                    page,
                    language: "en-US",
                },
            }),
        }),
        getTopRatedMovies: build.query<SearchResponse, void>({
            query: () => ({
                url: "movie/top_rated",
                params: {
                    api_key: import.meta.env.VITE_API_KEY,
                    language: "en-US",
                    page: 1,
                },
            }),
        }),
        getUpcomingMovies: build.query<SearchResponse, void>({
            query: () => ({
                url: "movie/upcoming",
                params: {
                    api_key: import.meta.env.VITE_API_KEY,
                    language: "en-US",
                    page: 1,
                },
            }),
        }),
    }),
});

export const {useGetPopularMoviesQuery, useSearchMoviesQuery , useGetTopRatedMoviesQuery, useGetUpcomingMoviesQuery}= moviesApi;