import { BackButton } from "@/features/movies/MoviesDetailPage/ui/BackButton/BackButton.tsx"
import s from "./MovieInfo.module.css"
import type { MovieDetail } from "@/app/schemas/moviesApi.schema.ts"


const IMAGE_URL = "https://image.tmdb.org/t/p/w342"
const NO_IMAGE_URL = "https://placehold.co/500x750?text=No+Image"

type Props = {
  movie: MovieDetail
}

export const MovieInfo = ({ movie }: Props) => {
  const rating = movie.vote_average ?? 0
  const hours = Math.floor(movie.runtime / 60)
  const minutes = movie.runtime % 60

  const getRatingClass = () => {
    if (rating >= 7) return s.high
    if (rating >= 5) return s.medium
    return s.low
  }
  return (
    <div className={s.container}>
      <img
        className={s.img}
        src={movie.poster_path ? `${IMAGE_URL}${movie.poster_path}` : `${NO_IMAGE_URL}`}
        alt={movie.title}
      />
      <div className={s.containerInfo}>
        <div className={s.header}>
          <h1>{movie.title}</h1>
          <BackButton />
        </div>
        <div className={s.detail}>
          <p>Release year: {movie.release_date?.slice(0, 4)}</p>
          <div className={`${s.rating} ${getRatingClass()}`}>
            {movie.vote_average !== undefined ? movie.vote_average.toFixed(1) : "-"}
          </div>
          <p>
            ⏱ {hours}h {minutes}m
          </p>
        </div>
        <p>{movie.overview}</p>
        <div>
          <h2>Genres</h2>
          <ul className={s.list}>
            {movie.genres.map((g) => (
              <li key={g.id}>{g.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
