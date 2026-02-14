import { baseApi } from "@/app/baseApi.ts"
import type { PaginatedMovies } from "@/app/moviesApi.schema.ts"

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMovies: build.query<PaginatedMovies, { category: string; page: number }>({
      query: ({ category, page }) => ({
        url: `/movie/${category}`,
        params: {
          page,
        },
      }),
    }),
  }),
})

export const { useGetMoviesQuery } = categoryApi
