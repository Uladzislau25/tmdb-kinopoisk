import { baseApi } from "@/app/baseApi.ts"
import type { GenresResponse, SearchResponse } from "@/app/moviesApi.types.ts"

export const filtredApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
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

export const { useGetMoviesDiscoverQuery, useGetGenresQuery } = filtredApi
