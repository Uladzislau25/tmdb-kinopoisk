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
import { PageNotFound } from "@/common/components/PageNotFound/PageNotFound.tsx"

export const MoviesDetailPage = () => {
  const { id } = useParams()
  const movieId = Number(id)

  const { data: movie } = useGetMovieDetailstQuery(movieId)
  const { data: credits } = useGetMovieCreditsQuery(movieId)
  const { data: similar } = useGetSimilarMoviesQuery(movieId)
  if (!movie) return <PageNotFound/>
  return (
    <main className={s.wrapper}>
      <MovieInfo movie={movie} />
      <MovieCast cast={credits?.cast ?? []} />
      {similar?.results.length === 0 ? null :<SimilarMovies movies={similar?.results ?? []} />}
    </main>
  )
}
