import { useGetTopRatedMoviesQuery } from "@/app/moviesApi.ts"
import { MovieCard, updateVisibleCards } from "@/common/components"
import s from "./TopRatedMovies.module.css"
import { useEffect, useRef } from "react"

export const TopRatedMovies = () => {
  const { data: topRated } = useGetTopRatedMoviesQuery()
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleResize = () => {
      updateVisibleCards(containerRef.current, 180, 20) // карточки 180px
    }

    window.addEventListener("resize", handleResize)
    handleResize() // сразу после рендера

    return () => window.removeEventListener("resize", handleResize)
  }, [topRated])

  const movies = topRated?.results ?? []

  return (
    <div ref={containerRef} className={s.container}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} width={180} height={260} />
      ))}
    </div>
  )
}
