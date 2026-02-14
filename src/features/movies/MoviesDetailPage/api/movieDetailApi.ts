import { baseApi } from "@/app/baseApi.ts"
import { type MovieCreditsResponse, type MovieDetail, type MoviesResponse } from "@/app/moviesApi.schema.ts"

export const movieDetailApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMovieDetailst: build.query<MovieDetail, number>({
      query: (id) => `/movie/${id}`,
    }),
    getMovieCredits: build.query<MovieCreditsResponse, number>({
      query: (id) => `/movie/${id}/credits`,
    }),
    getSimilarMovies: build.query<MoviesResponse, number>({
      query: (id) => `/movie/${id}/similar`,
    }),
  }),
})

export const { useGetMovieDetailstQuery, useGetMovieCreditsQuery, useGetSimilarMoviesQuery } = movieDetailApi
