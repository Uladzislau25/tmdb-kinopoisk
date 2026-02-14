import { baseApi } from "@/app/baseApi.ts"
import {
  type MovieCreditsResponse,
  MovieCreditsResponseSchema,
  type MovieDetail,
  MovieDetailSchema,
  type MoviesResponse,
  MoviesResponseSchema,
} from "@/app/moviesApi.schema.ts"
import { withZodCatch } from "@/common/utils/withZodCatch.ts"

export const movieDetailApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMovieDetailst: build.query<MovieDetail, number>({
      query: (id) => `/movie/${id}`,
      ...withZodCatch(MovieDetailSchema),
    }),
    getMovieCredits: build.query<MovieCreditsResponse, number>({
      query: (id) => `/movie/${id}/credits`,
      ...withZodCatch(MovieCreditsResponseSchema),
    }),
    getSimilarMovies: build.query<MoviesResponse, number>({
      query: (id) => `/movie/${id}/similar`,
      ...withZodCatch(MoviesResponseSchema),
    }),
  }),
})

export const { useGetMovieDetailstQuery, useGetMovieCreditsQuery, useGetSimilarMoviesQuery } = movieDetailApi
