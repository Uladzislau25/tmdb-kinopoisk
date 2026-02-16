import { useSearchParams } from "react-router"
import { MovieCard, SearchBar } from "@/common/components"
import s from "./Search.module.css"
import { Pagination } from "@/common/components/Pagination/Pagination.tsx"
import { useSearchMoviesQuery } from "@/features/movies/Search/api/searchApi.ts"
import { MovieSkeleton } from "@/common/components/MovieSkeleton/MovieSkeleton.tsx"

export const Search = () => {
  const [params, setParams] = useSearchParams()

  const query = (params.get("query") || "").trim()
  const page = Number(params.get("page") || 1)

  const { data, isFetching } = useSearchMoviesQuery({ query, page }, { skip: !query })
  const movies = data?.results ?? []

  const handlePageChange = (newPage: number) => {
    setParams({
      query,
      page: String(newPage),
    })
  }
  return (
    <section className={s.wrapper}>
      <h2>Search Results</h2>

      <SearchBar />

      {!query && <p>Enter a movie title to start searching</p>}

      {query && data?.results.length === 0 && <p>No matches found for: {query}</p>}

      {query && (
        <>
          {isFetching ? (
            <MovieSkeleton columns={5} rows={4} width={220} height={330} />
          ) : movies.length > 0 ? (
            <section className={s.box}>
              <h2>Results: {query}</h2>
              <div className={s.moviesGrid}>
                {movies.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
            </section>
          ) : null}
        </>
      )}

      {!query ||
        (movies.length > 0 && <Pagination page={page} totalPages={data?.total_pages} onChange={handlePageChange} />)}
    </section>
  )
}
