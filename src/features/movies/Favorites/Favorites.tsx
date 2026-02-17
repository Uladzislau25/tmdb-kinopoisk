import { useFavorites } from "@/common/hooks"
import { MovieCard } from "@/common/components"
import s from "./Favorites.module.css"
import { useState } from "react"
import { Pagination } from "@/common/components/Pagination/Pagination.tsx"

export const Favorites = () => {
  const favorites = useFavorites()
  const [page, setPage] = useState(1)
  const itemsPerPage = 20

  const totalPages = Math.ceil(favorites.length / itemsPerPage)
  const startIndex = (page - 1) * itemsPerPage
  const currentFavorites = favorites.slice(startIndex, startIndex + itemsPerPage)

  return (
    <section className={s.wrapper}>
      <h1>Favorites</h1>
      <div className={s.container}>
        {!favorites.length ? (
          <p className={s.text}>Add movies to favorites to see them on this page</p>
        ) : (
          <>
            <h2>Favorite Movies</h2>
            <div className={s.grid}>
              {currentFavorites.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={{
                    id: movie.id,
                    title: movie.title,
                    poster_path: movie.posterUrl || null,
                    vote_average: movie.voteAverage,
                  }}
                  width={220}
                  height={330}
                />
              ))}
            </div>
            {totalPages > 1 && <Pagination page={page} totalPages={totalPages} onChange={setPage} />}
          </>
        )}
      </div>
    </section>
  )
}
