import { baseApi } from "@/app/baseApi.ts"
import type { SearchResponse } from "@/app/moviesApi.types.ts"

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMovies: build.query<SearchResponse, { category: string; page: number }>({
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
