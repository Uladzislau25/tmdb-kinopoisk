import s from "./SimilarMovies.module.css"
import type { MovieShort } from "@/app/schemas/moviesApi.schema.ts"
import { MovieCard } from "@/common/components"

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
            <MovieCard key={movie.id} movie={movie} width={180} height={270} />
          ))}
        </div>
      </div>
    </section>
  )
}
