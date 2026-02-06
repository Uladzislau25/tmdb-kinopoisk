import {useSearchParams} from "react-router";
import {useSearchMoviesQuery} from "@/app/moviesApi.ts";
import {MovieCard, SearchBar} from "@/common/components";
import s from './Search.module.css'


export const Search = () => {
    const [params] = useSearchParams()

    const query = (params.get('query') || '').trim()
    const page = Number(params.get('page') || 1)

    const { data, isLoading, isError } = useSearchMoviesQuery(
        { query, page },
        { skip: !query }
    )
    const movies = data?.results ?? []
    return (
        <div className={s.wrapper}>
            <h2>Search Results</h2>
            {/* Панель поиска */}
            <SearchBar />

            {/* Нет запроса */}
            {!query && <p>Enter a movie title to start searching</p>}

            {/* Загрузка */}
            {isLoading && <p>Loading...</p>}

            {/* Ошибка */}
            {isError && <p>Error loading movies</p>}

            {/* Нет результатов */}
            {query && data?.results.length === 0 && (
                <p>No matches found for: {query}</p>
            )}

            {/* Результаты */}
            {!query || movies.length > 0 && (
                <>
                    <h2>Results: {query}</h2>

                    <div className={s.moviesGrid}>
                        {movies.map((movie) => (
                          <MovieCard movie={movie}/>
                        ))}
                    </div>

                </>
            )}
        </div>
    )
}
