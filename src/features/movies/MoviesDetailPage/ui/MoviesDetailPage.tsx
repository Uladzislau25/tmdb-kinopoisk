import s from "./MoviesDetailPage.module.css"
import { MovieInfo } from "@/features/movies/MoviesDetailPage/ui/MovieInfo/MovieInfo.tsx"
import { useParams } from "react-router"
import {
  useGetMovieCreditsQuery,
  useGetMovieDetailstQuery,
  useGetSimilarMoviesQuery,
} from "@/features/movies/MoviesDetailPage/api/movieDetailApi.ts"
import { MovieCast } from "@/features/movies/MoviesDetailPage/ui/MovieCast/MovieCast.tsx"
import { SimilarMovies } from "@/features/movies/MoviesDetailPage/ui/SimilarMovies/SimilarMovies.tsx"

export const MoviesDetailPage = () => {
  const { id } = useParams()
  const movieId = Number(id)

  const { data: movie, isLoading, isError } = useGetMovieDetailstQuery(movieId)
  const { data: credits } = useGetMovieCreditsQuery(movieId)
  const { data: similar } = useGetSimilarMoviesQuery(movieId)

  if (isLoading) return <p>Loading...</p>
  if (isError || !movie) return <p>Error!</p>

  return (
    <main className={s.wrapper}>
      <MovieInfo movie={movie} />
      <MovieCast cast={credits?.cast ?? []} />
      <SimilarMovies movies={similar?.results ?? []} />
    </main>
  )
}
