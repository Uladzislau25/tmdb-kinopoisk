import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { GenresResponse, SearchMoviesParams, SearchResponse } from "@/app/moviesApi.types.ts"
import { AUTH_TOKEN, BASE_URL } from "@/common/constants"

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${AUTH_TOKEN}`)
      return headers
    },
  }),
  endpoints: (build) => ({
    searchMovies: build.query<SearchResponse, SearchMoviesParams>({
      query: ({ query, page = 1 }) => ({
        url: "search/movie",
        params: {
          query,
          page,
        },
      }),
    }),
    getPopularMovies: build.query<SearchResponse, void>({
      query: () => "/movie/popular",
    }),
    getTopRatedMovies: build.query<SearchResponse, void>({
      query: () => "movie/top_rated",
    }),
    getUpcomingMovies: build.query<SearchResponse, void>({
      query: () => "movie/upcoming",
    }),
    getNowPlayingMovies: build.query<SearchResponse, void>({
      query: () => "movie/now_playing",
    }),
    getMovies: build.query<SearchResponse, { category: string; page: number }>({
      query: ({ category, page }) => ({
        url: `/movie/${category}`,
        params: {
          page,
        },
      }),
    }),
    getMoviesDiscover: build.query<
      SearchResponse,
      {
        sort_by: string
        "vote_average.gte"?: number
        "vote_average.lte"?: number
        with_genres?: string
        page?: number
      }
    >({
      query: (params) => ({
        url: "/discover/movie",
        params: {
          ...params,
        },
      }),
    }),
    getGenres: build.query<GenresResponse, void>({
      query: () => "/genre/movie/list",
    }),
  }),
})

export const {
  useGetPopularMoviesQuery,
  useSearchMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetUpcomingMoviesQuery,
  useGetNowPlayingMoviesQuery,
  useGetMoviesQuery,
  useGetGenresQuery,
  useGetMoviesDiscoverQuery,
} = moviesApi
