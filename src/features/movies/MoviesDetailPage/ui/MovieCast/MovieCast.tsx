import type { Cast } from "@/features/movies/MoviesDetailPage/api/movieDetailApi.types.ts"
import { ActorCard } from "@/features/movies/MoviesDetailPage/ui/MovieCast/ActorCard/ActorCard.tsx"
import s from "./MovieCast.module.css"
type Props = {
  cast: Cast[]
}
export const MovieCast = ({ cast }: Props) => {
  return (
    <section className={s.section}>
      <h2>Cast</h2>
      <div className={s.actorCard}>
        {cast.slice(0, 6).map((actor) => (
          <ActorCard key={actor.id} actor={actor} />
        ))}
      </div>
    </section>
  )
}
