import s from "./MovieCard.module.css"
import * as React from "react"
import { Link, useLocation } from "react-router"
import type { Movie, MovieShort } from "@/app/schemas/moviesApi.schema.ts"
import { useIsFavorite, useToggleFavorite } from "@/common/hooks"
import type { CardMovie } from "@/app/type/types.ts"

const placeholder = "https://placehold.co/300x450?text=No+Poster"

type Props = {
  movie: Movie | MovieShort | CardMovie
  width?: number
  height?: number
}

export const MovieCard = ({ movie, width = 220, height = 330 }: Props) => {
  const location = useLocation()
  const toggleFavorite = useToggleFavorite()
  const isFavorite = useIsFavorite(movie.id)

  const handleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    toggleFavorite({
      id: movie.id,
      title: movie.title,
      posterUrl: posterFullUrl,
      voteAverage: movie.vote_average ?? 0,
    })
  }
  const rating = movie.vote_average ?? 0

  const getRatingClass = () => {
    if (rating >= 7) return s.high
    if (rating >= 5) return s.medium
    return s.low
  }
  const posterFullUrl = movie.poster_path
    ? movie.poster_path.startsWith("http")
      ? movie.poster_path
      : `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    : placeholder;

  return (
    <Link to={`/movie/${movie.id}`} state={{ from: location }} className={s.wrapper} style={{ width: `${width}px` }}>
      <div className={s.posterWrapper} style={{ height: `${height}px` }}>
        <img src={posterFullUrl} alt={movie.title} className={s.poster} />

        <button className={isFavorite ? s.favoriteBtnActive : s.favoriteBtn} onClick={handleFavorite}>
          <span className={isFavorite ? s.heartActive : s.heart}>❤️</span>
        </button>
        <div className={`${s.rating} ${getRatingClass()}`}>
          {movie.vote_average !== undefined ? movie.vote_average.toFixed(1) : "-"}
        </div>
      </div>
      <p className={s.title}>{movie.title}</p>
    </Link>
  )
}
