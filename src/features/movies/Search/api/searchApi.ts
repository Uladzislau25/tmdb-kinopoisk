import { baseApi } from "@/app/baseApi.ts"
import { type PaginatedMovies, PaginatedMoviesSchema, type SearchMoviesParams } from "@/app/moviesApi.schema.ts"
import { withZodCatch } from "@/common/utils/withZodCatch.ts"

export const searchApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    searchMovies: build.query<PaginatedMovies, SearchMoviesParams>({
      query: ({ query, page = 1 }) => ({
        url: "search/movie",
        params: {
          query,
          page,
        },
        ...withZodCatch(PaginatedMoviesSchema),
      }),
    }),
  }),
})
export const { useSearchMoviesQuery } = searchApi
