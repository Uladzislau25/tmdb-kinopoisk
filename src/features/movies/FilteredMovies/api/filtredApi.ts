import { baseApi } from "@/app/api/baseApi.ts"
import {
  type GenresResponse,
  GenresResponseSchema,
  type PaginatedMovies,
  PaginatedMoviesSchema,
} from "@/app/schemas/moviesApi.schema.ts"
import { withZodCatch } from "@/common/utils/withZodCatch.ts"

export const filtredApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMoviesDiscover: build.query<
      PaginatedMovies,
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
        ...withZodCatch(PaginatedMoviesSchema),
        providesTags: ["FilteredMovies"],
      }),
    }),
    getGenres: build.query<GenresResponse, void>({
      query: () => "/genre/movie/list",
      ...withZodCatch(GenresResponseSchema),
      providesTags: ['FilteredMovies']
    }),
  }),
})

export const { useGetMoviesDiscoverQuery, useGetGenresQuery } = filtredApi
