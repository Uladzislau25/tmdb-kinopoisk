import { baseApi } from "@/app/baseApi.ts"
import type { PaginatedMovies } from "@/app/moviesApi.schema.ts"

export const mainApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPopularMovies: build.query<PaginatedMovies, void>({
      query: () => "/movie/popular",
    }),
    getTopRatedMovies: build.query<PaginatedMovies, void>({
      query: () => "movie/top_rated",
    }),
    getUpcomingMovies: build.query<PaginatedMovies, void>({
      query: () => "movie/upcoming",
    }),
    getNowPlayingMovies: build.query<PaginatedMovies, void>({
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
