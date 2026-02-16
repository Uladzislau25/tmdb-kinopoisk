import s from "./ActorCard.module.css"
import type { Cast } from "@/app/schemas/moviesApi.schema.ts"

type Props = {
  actor: Cast
}

const IMAGE_ACTER_URL = "https://image.tmdb.org/t/p/w200"
const NO_IMAGE_ACTER_URL = "https://placehold.co/200x300?text=No+Image"

export const ActorCard = ({ actor }: Props) => {
  return (
    <div className={s.container}>
      <img
        className={s.img}
        src={actor.profile_path ? `${IMAGE_ACTER_URL}${actor.profile_path}` : `${NO_IMAGE_ACTER_URL}`}
        alt={actor.name}
      />
      <p className={s.title}>{actor.name}</p>
      <span className={s.subtitle}>{actor.character}</span>
    </div>
  )
}
