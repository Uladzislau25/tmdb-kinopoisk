import { useSearchParams } from "react-router"
import { useEffect, useState } from "react"

import { MovieCard } from "@/common/components"

import s from "./CategoryMovies.module.css"
import { useGetMoviesQuery } from "@/features/movies/CategoryMovies/api/categoryApi.ts"
import type { Movie } from "@/app/moviesApi.schema.ts"
import { Pagination } from "@/common/components/Pagination/Pagination.tsx"
import { MovieSkeleton } from "@/common/components/MovieSkeleton/MovieSkeleton.tsx"

const categories = [
  { key: "popular", label: "Popular Movies" },
  { key: "top_rated", label: "Top Rated Movies" },
  { key: "upcoming", label: "Upcoming Movies" },
  { key: "now_playing", label: "Now Playing Movies" },
]

export const CategoryMovies = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const type = searchParams.get("type") || "popular"
  const pageFromUrl = Number(searchParams.get("page")) || 1

  const [movies, setMovies] = useState<Movie[]>([])

  const { data, isFetching } = useGetMoviesQuery({
    category: type,
    page: pageFromUrl,
  })

  useEffect(() => {
    if (data?.results) {
      setMovies(data.results)
    }
  }, [data])

  const handleCategoryChange = (newType: string) => {
    setSearchParams({
      type: newType,
      page: "1",
    })
  }

  const handlePageChange = (newPage: number) => {
    setSearchParams({
      type,
      page: newPage.toString(),
    })
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const activeCategory = categories.find((c) => c.key === type)

  return (
    <section className={s.wrapper}>
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

      <section className={s.box}>
        <h2>{activeCategory?.label}</h2>
        <div className={s.moviesGrid}>
          {isFetching ? (
            <MovieSkeleton width={220} height={330} rows={4} columns={5} />
          ) : (
            <>
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </>
          )}
        </div>
        <Pagination page={pageFromUrl} onChange={handlePageChange} totalPages={data?.total_pages} />
      </section>
    </section>
  )
}
