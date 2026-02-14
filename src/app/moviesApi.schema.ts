import { z } from "zod"

export const MovieSchema = z.object({
  adult: z.boolean(),
  backdrop_path: z.string().nullable(),
  genre_ids: z.array(z.number()).optional(),
  id: z.number(),
  original_language: z.string(),
  original_title: z.string(),
  overview: z.string().optional(),
  popularity: z.number(),
  poster_path: z.string().nullable(),
  release_date: z.string().optional(),
  title: z.string(),
  vote_average: z.number(),
  vote_count: z.number(),
})

export const PaginatedMoviesSchema = z.object({
  page: z.number(),
  results: z.array(MovieSchema),
  total_pages: z.number(),
  total_results: z.number(),
})

export const GenresSchema = z.object({
  id: z.number(),
  name: z.string(),
})

export const GenresResponseSchema = z.object({
  genres: z.array(GenresSchema),
})

export const MovieDetailSchema = z.object({
  id: z.number(),
  title: z.string(),
  poster_path: z.string().nullable(),
  release_date: z.string().optional(),
  vote_average: z.number(),
  genres: z.array(GenresSchema),
  runtime: z.number(),
  overview: z.string(),
})

export const CastSchema = z.object({
  id: z.number(),
  name: z.string(),
  character: z.string(),
  profile_path: z.string().nullable(),
})

export const MovieCreditsResponseSchema = z.object({
  id: z.number(),
  cast: z.array(CastSchema),
})

export const MoviesShortSchema = z.object({
  id: z.number(),
  title: z.string(),
  poster_path: z.string().nullable(),
  vote_average: z.number(),
  release_date: z.string(),
})
export const MoviesResponseSchema = z.object({
  page: z.number(),
  results: z.array(MoviesShortSchema),
})

export type Movie = z.infer<typeof MovieSchema>
export type PaginatedMovies = z.infer<typeof PaginatedMoviesSchema>
export type GenresResponse = z.infer<typeof GenresResponseSchema>
export type MovieDetail = z.infer<typeof MovieDetailSchema>
export type Cast = z.infer<typeof CastSchema>
export type MovieCreditsResponse = z.infer<typeof MovieCreditsResponseSchema>
export type MovieShort = z.infer<typeof MoviesShortSchema>
export type MoviesResponse = z.infer<typeof MoviesResponseSchema>

export type SearchMoviesParams = {
  query: string
  page?: number
}
