import { baseApi } from "@/app/baseApi.ts"
import type { PaginatedMovies, SearchMoviesParams } from "@/app/moviesApi.schema.ts"

export const searchApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    searchMovies: build.query<PaginatedMovies, SearchMoviesParams>({
      query: ({ query, page = 1 }) => ({
        url: "search/movie",
        params: {
          query,
          page,
        },
      }),
    }),
  }),
})
export const { useSearchMoviesQuery } = searchApi
