import type { MovieShort } from "@/features/movies/MoviesDetailPage/api/movieDetailApi.types.ts"
import { MovieCardShort } from "@/common/components/MovieCardShort/MovieCardShort.tsx"
import s from "./SimilarMovies.module.css"

type Props = {
  movies: MovieShort[]
}

export const SimilarMovies = ({ movies }: Props) => {
  return (
    <section className={s.section}>
      <h2>Similar Movies</h2>
      <div>
        <div className={s.container}>
          {movies.slice(0, 6).map((movie) => (
            <MovieCardShort key={movie.id} movie={movie} width={180} height={270} />
          ))}
        </div>
      </div>
    </section>
  )
}
