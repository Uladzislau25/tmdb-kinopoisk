export type FavoriteMovie = {
  id: number
  title: string
  posterUrl: string | null
  voteAverage: number
}

export type ThemeMode = "dark" | "light"

export type SearchMoviesParams = {
  query: string
  page?: number
}
export type CardMovie = {
  id: number
  title: string
  poster_path: string | null
  vote_average: number
}
