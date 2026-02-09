import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import type {GenresResponse, SearchMoviesParams, SearchResponse} from "@/app/moviesApi.types.ts";


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
        getNowPlayingMovies: build.query<SearchResponse, void>({
            query: () => ({
                url: "movie/now_playing",
                params: {
                    api_key: import.meta.env.VITE_API_KEY,
                    language: "en-US",
                    page: 1,
                },
            }),
        }),
        getMovies: build.query<SearchResponse,{ category: string; page: number }>({
            query: ({category, page}) => ({
                url: `/movie/${category}`,
                params: {
                    api_key: import.meta.env.VITE_API_KEY,
                    page,
                },
            }),
        }),
        getMoviesDiscover: build.query<SearchResponse, {
            sort_by: string;
            'vote_average.gte'?: number;
            'vote_average.lte'?: number;
            with_genres?: string;
            page?: number;
        }>({
            query: (params)=> ({
                url: '/discover/movie',
                params: {
                    api_key: import.meta.env.VITE_API_KEY,
                    ...params
                }
            })
        }),
        getGenres: build.query<GenresResponse, void>({
            query: ()=>({
                url: '/genre/movie/list',
                params: {
                    api_key: import.meta.env.VITE_API_KEY,
                }
            })
        })
    }),
});

export const {useGetPopularMoviesQuery, useSearchMoviesQuery , useGetTopRatedMoviesQuery, useGetUpcomingMoviesQuery, useGetNowPlayingMoviesQuery, useGetMoviesQuery, useGetGenresQuery, useGetMoviesDiscoverQuery}= moviesApi;