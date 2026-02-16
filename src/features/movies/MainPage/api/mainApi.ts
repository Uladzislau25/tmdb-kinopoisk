import { baseApi } from "@/app/api/baseApi.ts"
import { type PaginatedMovies, PaginatedMoviesSchema } from "@/app/schemas/moviesApi.schema.ts"
import { withZodCatch } from "@/common/utils/withZodCatch.ts"

export const mainApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPopularMovies: build.query<PaginatedMovies, void>({
      query: () => "/movie/popular",
      ...withZodCatch(PaginatedMoviesSchema),
    }),
    getTopRatedMovies: build.query<PaginatedMovies, void>({
      query: () => "movie/top_rated",
      ...withZodCatch(PaginatedMoviesSchema),
    }),
    getUpcomingMovies: build.query<PaginatedMovies, void>({
      query: () => "movie/upcoming",
      ...withZodCatch(PaginatedMoviesSchema),
    }),
    getNowPlayingMovies: build.query<PaginatedMovies, void>({
      query: () => "movie/now_playing",
      ...withZodCatch(PaginatedMoviesSchema),
    }),
  }),
})

export const {
  useGetPopularMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetUpcomingMoviesQuery,
  useGetNowPlayingMoviesQuery,
} = mainApi
