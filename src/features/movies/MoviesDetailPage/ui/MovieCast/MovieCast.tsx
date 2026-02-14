import { ActorCard } from "@/features/movies/MoviesDetailPage/ui/MovieCast/ActorCard/ActorCard.tsx"
import s from "./MovieCast.module.css"
import type { Cast } from "@/app/moviesApi.schema.ts"

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
