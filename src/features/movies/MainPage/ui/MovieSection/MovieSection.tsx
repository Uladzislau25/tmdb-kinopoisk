import { MovieCard } from "@/common/components"
import s from "./MovieSection.module.css"
import type { Movie } from "@/app/schemas/moviesApi.schema.ts"

type Props = {
  movies?: Movie[]
}

export const MovieSection = ({ movies }: Props) => {
  return (
    <div className={s.container}>
      {movies?.slice(0, 6).map((movie) => (
        <MovieCard key={movie.id} movie={movie} width={180} height={260} />
      ))}
    </div>
  )
}
