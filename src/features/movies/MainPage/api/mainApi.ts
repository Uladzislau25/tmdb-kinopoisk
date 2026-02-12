import { baseApi } from "@/app/baseApi.ts"
import type { SearchResponse } from "@/app/moviesApi.types.ts"

export const mainApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
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
  }),
})

export const {
  useGetPopularMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetUpcomingMoviesQuery,
  useGetNowPlayingMoviesQuery,
} = mainApi
