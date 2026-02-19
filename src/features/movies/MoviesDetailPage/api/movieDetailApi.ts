import { baseApi } from "@/app/api/baseApi.ts"
import {
  type MovieCreditsResponse,
  MovieCreditsResponseSchema,
  type MovieDetail,
  MovieDetailSchema,
  type MoviesResponse,
  MoviesResponseSchema,
} from "@/app/schemas/moviesApi.schema.ts"
import { withZodCatch } from "@/common/utils/withZodCatch.ts"

export const movieDetailApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMovieDetailst: build.query<MovieDetail, number>({
      query: (id) => `/movie/${id}`,
      ...withZodCatch(MovieDetailSchema),
      providesTags: (_result, _error, id)=>[{ type:'DetailMovie', id}]
    }),
    getMovieCredits: build.query<MovieCreditsResponse, number>({
      query: (id) => `/movie/${id}/credits`,
      ...withZodCatch(MovieCreditsResponseSchema),
      providesTags: (_result, _error, id)=>[{ type:'DetailMovie', id}]
    }),
    getSimilarMovies: build.query<MoviesResponse, number>({
      query: (id) => `/movie/${id}/similar`,
      ...withZodCatch(MoviesResponseSchema),
      providesTags: (_result, _error, id)=>[{ type:'DetailMovie', id}]
    }),
  }),
})

export const { useGetMovieDetailstQuery, useGetMovieCreditsQuery, useGetSimilarMoviesQuery } = movieDetailApi
