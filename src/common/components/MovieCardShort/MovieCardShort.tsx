import { useState } from "react"
import { Link, useLocation } from "react-router"
import type { MovieShort } from "@/features/movies/MoviesDetailPage/api/movieDetailApi.types.ts"
import * as React from "react"
import s from "./MovieCardShort.module.css"

const placeholder = "https://placehold.co/300x450?text=No+Poster"

type Props = {
  movie: MovieShort
  width?: number
  height?: number
}

export const MovieCardShort = ({ movie, width = 220, height = 330 }: Props) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const location = useLocation()

  const handleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsFavorite((prev) => !prev)
  }
  const rating = movie.vote_average ?? 0

  const getRatingClass = () => {
    if (rating >= 7) return s.high
    if (rating >= 5) return s.medium
    return s.low
  }

  return (
    <Link to={`/movie/${movie.id}`} state={{ from: location }} className={s.wrapper} style={{ width: `${width}px` }}>
      <div className={s.posterWrapper} style={{ height: `${height}px` }}>
        <img
          src={movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : placeholder}
          alt={movie.title}
          className={s.poster}
        />

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
