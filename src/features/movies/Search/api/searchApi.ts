import { baseApi } from "@/app/baseApi.ts"
import type { SearchMoviesParams, SearchResponse } from "@/app/moviesApi.types.ts"

export const searchApi = baseApi.injectEndpoints({
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
  }),
})
export const { useSearchMoviesQuery } = searchApi
