import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { GenresResponse, SearchMoviesParams, SearchResponse } from "@/app/moviesApi.types.ts"
import { AUTH_TOKEN, BASE_URL } from "@/common/constants"
import { errorToast } from "@/common/utils/errorToast.ts"

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: async (args, api, extraOptions) => {
    const result = await fetchBaseQuery({
      baseUrl: BASE_URL,
      prepareHeaders: (headers) => {
        headers.set("Authorization", `Bearer ${AUTH_TOKEN}`)
        return headers
      },
    })(args, api, extraOptions)
    if (result.error) {
      switch (result.error.status) {
        case "FETCH_ERROR":
        case "PARSING_ERROR":
        case "CUSTOM_ERROR":
        case "TIMEOUT_ERROR":
          errorToast(result.error.status)
          break
        case 401:
        case 404:
          console.log(result.error.data)
          errorToast((result.error.data as { status_message: string }).status_message)
          break
        default:
          errorToast("Some error occurred")
      }
    }
    return result
  },
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
        url: `/movie1/${category}`,
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
