import s from "./MoviesDetailPage.module.css"
import { MovieInfo } from "@/features/movies/MoviesDetailPage/ui/MovieInfo/MovieInfo.tsx"
import { useNavigate, useParams } from "react-router"
import {
  useGetMovieCreditsQuery,
  useGetMovieDetailstQuery,
  useGetSimilarMoviesQuery,
} from "@/features/movies/MoviesDetailPage/api/movieDetailApi.ts"
import { MovieCast } from "@/features/movies/MoviesDetailPage/ui/MovieCast/MovieCast.tsx"
import { SimilarMovies } from "@/features/movies/MoviesDetailPage/ui/SimilarMovies/SimilarMovies.tsx"
import { useEffect } from "react"
import { Path } from "@/common/routing"


export const MoviesDetailPage = () => {
  const { id } = useParams()
  const movieId = Number(id)
  const navigate = useNavigate()

    const { data: movie, isLoading ,isError } = useGetMovieDetailstQuery(movieId)
  const { data: credits } = useGetMovieCreditsQuery(movieId)
  const { data: similar } = useGetSimilarMoviesQuery(movieId)

  useEffect(() => {
    if (!isLoading && (isError || !movie)) {
      navigate(Path.NotFound, { replace: true })
    }
  }, [isError, movie, navigate])


  if (!movie) return null
  return (
    <main className={s.wrapper}>
      <MovieInfo movie={movie} />
      <MovieCast cast={credits?.cast ?? []} />
      {similar?.results.length === 0 ? null :<SimilarMovies movies={similar?.results ?? []} />}
    </main>
  )
}
