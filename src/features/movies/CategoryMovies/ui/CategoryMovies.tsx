import { useSearchParams } from "react-router"
import { useEffect, useRef, useState } from "react"

import { MovieCard } from "@/common/components"

import s from "./CategoryMovies.module.css"
import type { Movie } from "@/app/moviesApi.types.ts"
import { useGetMoviesQuery } from "@/features/movies/CategoryMovies/api/categoryApi.ts"

const categories = [
  { key: "popular", label: "Popular Movies" },
  { key: "top_rated", label: "Top Rated Movies" },
  { key: "upcoming", label: "Upcoming Movies" },
  { key: "now_playing", label: "Now Playing Movies" },
]

export const CategoryMovies = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const type = searchParams.get("type") || "popular"

  const [page, setPage] = useState(1)

  const [movies, setMovies] = useState<Movie[]>([])

  const loaderRef = useRef<HTMLDivElement | null>(null)

  const { data, isLoading, isFetching, isError } = useGetMoviesQuery({
    category: type,
    page,
  })

  useEffect(() => {
    setPage(1)
    setMovies([])

    setSearchParams({
      type,
    })
  }, [type])

  useEffect(() => {
    if (data?.results) {
      setMovies((prev) => [...prev, ...data.results])
    }
  }, [data])

  useEffect(() => {
    if (!loaderRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isFetching && page < (data?.total_pages || 1)) {
          setPage((prev) => prev + 1)
        }
      },
      {
        rootMargin: "200px",
      },
    )

    observer.observe(loaderRef.current)

    return () => observer.disconnect()
  }, [isFetching, data, page])

  const handleCategoryChange = (newType: string) => {
    setSearchParams({
      type: newType,
    })
  }

  const activeCategory = categories.find((c) => c.key === type)

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => handleCategoryChange(cat.key)}
            className={cat.key === type ? s.active : s.btn}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <h2>{activeCategory?.label}</h2>

      {isError && <p>Error...</p>}

      <div className={s.moviesGrid}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <div ref={loaderRef} />

      {(isLoading || isFetching) && <p>Loading...</p>}
    </div>
  )
}
