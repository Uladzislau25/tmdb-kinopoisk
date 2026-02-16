import { baseApi } from "@/app/api/baseApi.ts"
import { type PaginatedMovies, PaginatedMoviesSchema } from "@/app/schemas/moviesApi.schema.ts"
import { withZodCatch } from "@/common/utils/withZodCatch.ts"
import type { SearchMoviesParams } from "@/app/type/types.ts"

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
