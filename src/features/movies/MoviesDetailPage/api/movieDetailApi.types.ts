export type Genre = {
  id: number
  name: string
}

export type MovieDetail = {
  id: number
  title: string
  poster_path: string | null
  release_date: string
  vote_average: number
  genres: Genre[]
  runtime: number
  overview: string
}

export type Cast = {
  id: number
  name: string
  character: string
  profile_path: string | null
}

export type MovieCreditsResponse = {
  id: number
  cast: Cast[]
}

export type MovieShort = {
  id: number
  title: string
  poster_path: string | null
  vote_average: number
  release_date: string
}
export type MoviesResponse = {
  page: number
  results: MovieShort[]
}
