import { baseApi } from "@/app/api/baseApi.ts"
import { type PaginatedMovies, PaginatedMoviesSchema } from "@/app/schemas/moviesApi.schema.ts"
import { withZodCatch } from "@/common/utils/withZodCatch.ts"

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMovies: build.query<PaginatedMovies, { category: string; page: number }>({
      query: ({ category, page }) => ({
        url: `/movie/${category}`,
        params: {
          page,
        },
        ...withZodCatch(PaginatedMoviesSchema),
      }),
    }),
  }),
})

export const { useGetMoviesQuery } = categoryApi
