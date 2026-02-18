import { useEffect,  useState } from "react"
import { useDebounce } from "@/common/hooks/useDebounce.ts"
import { Pagination } from "@/common/components/Pagination/Pagination.tsx"
import { FiltersPanel } from "@/features/movies/FilteredMovies/ui/FiltredPanel/FiltredPanel.tsx"
import s from "./FiltredMovies.module.css"
import { useGetMoviesDiscoverQuery } from "@/features/movies/FilteredMovies/api/filtredApi.ts"
import { MovieSkeleton } from "@/common/components/MovieSkeleton/MovieSkeleton.tsx"
import { ResultSort } from "@/features/movies/FilteredMovies/ui/ResultSort/ResultSort.tsx"

export const FilteredMovies = () => {
  const [sortBy, setSortBy] = useState<string>("popularity.desc")
  const [rating, setRating] = useState<[number, number]>([0, 10])
  const [genres, setGenres] = useState<number[]>([])
  const [page, setPage] = useState<number>(1)

  useEffect(() => {
    setPage(1)
  }, [sortBy, genres, rating])

  const debouncedRating = useDebounce(rating, 200)

  const { data, isFetching } = useGetMoviesDiscoverQuery({
    sort_by: sortBy,
    "vote_average.gte": debouncedRating[0],
    "vote_average.lte": debouncedRating[1],
    with_genres: genres.join(","),
    page,
  })

  const resetFilters = () => {
    setSortBy("popularity.desc")
    setRating([0, 10])
    setGenres([])
    setPage(1)
  }

  return (
    <section className={s.wrapper}>
      <FiltersPanel
        sortBy={sortBy}
        setSortBy={setSortBy}
        rating={rating}
        setRating={setRating}
        genres={genres}
        setGenres={setGenres}
        resetFilters={resetFilters}
      />

      {isFetching ? (
        <MovieSkeleton width={150} height={250} columns={5} rows={4} />
      ) : (
        <section className={s.box}>
          <ResultSort movies={data?.results ?? []} />

          {(data?.total_pages ?? 0) > 1 && <Pagination page={page} totalPages={data?.total_pages} onChange={setPage} />}
        </section>
      )}
    </section>
  )
}
