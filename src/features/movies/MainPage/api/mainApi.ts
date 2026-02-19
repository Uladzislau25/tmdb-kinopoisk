import { baseApi } from "@/app/api/baseApi.ts"
import { type PaginatedMovies, PaginatedMoviesSchema } from "@/app/schemas/moviesApi.schema.ts"
import { withZodCatch } from "@/common/utils/withZodCatch.ts"

export const mainApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPopularMovies: build.query<PaginatedMovies, void>({
      query: () => "/movie/popular",
      providesTags: ['MainPage'],
      ...withZodCatch(PaginatedMoviesSchema),

    }),
    getTopRatedMovies: build.query<PaginatedMovies, void>({
      query: () => "movie/top_rated",
      ...withZodCatch(PaginatedMoviesSchema),
      providesTags: ['MainPage'],
    }),
    getUpcomingMovies: build.query<PaginatedMovies, void>({
      query: () => "movie/upcoming",
      ...withZodCatch(PaginatedMoviesSchema),
      providesTags: ['MainPage'],
    }),
    getNowPlayingMovies: build.query<PaginatedMovies, void>({
      query: () => "movie/now_playing",
      ...withZodCatch(PaginatedMoviesSchema),
      providesTags: ['MainPage'],
    }),
  }),
})

export const {
  useGetPopularMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetUpcomingMoviesQuery,
  useGetNowPlayingMoviesQuery,
} = mainApi
