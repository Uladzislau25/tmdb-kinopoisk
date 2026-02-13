import { baseApi } from "@/app/baseApi.ts"
import type {
  MovieCreditsResponse,
  MovieDetail,
  MoviesResponse,
} from "@/features/movies/MoviesDetailPage/api/movieDetailApi.types.ts"

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
