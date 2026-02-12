import { MovieCard, updateVisibleCards } from "@/common/components"
import s from "./PopularMovie.module.css"
import { useEffect, useRef } from "react"
import { useGetPopularMoviesQuery } from "@/features/movies/MainPage/api/mainApi.ts"

export const PopularMovie = () => {
  const { data } = useGetPopularMoviesQuery()
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleResize = () => {
      updateVisibleCards(containerRef.current, 180, 20)
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => window.removeEventListener("resize", handleResize)
  }, [data])

  const movies = data?.results ?? []

  return (
    <div ref={containerRef} className={s.container}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} width={180} height={260} />
      ))}
    </div>
  )
}
