import s from "./ResultSort.module.css"
import { MovieCard } from "@/common/components"
import type { Movie } from "@/app/schemas/moviesApi.schema.ts"

type Props = {
  movies: Movie[]
}

export const ResultSort = ({ movies }: Props) => {
  return (
    <div className={s.container}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} width={150} height={250} />
      ))}
    </div>
  )
}
