import { useMemo, useState} from "react";
import {useDebounce} from "@/common/hooks/useDebounce.ts";
import {useGetMoviesDiscoverQuery} from "@/app/moviesApi.ts";
import {Pagination} from "@/common/components/Pagination/Pagination.tsx";
import {MovieCard} from "@/common/components";
import {FiltersPanel} from "@/features/movies/ui/FilteredMovies/FiltredPanel/FiltredPanel.tsx";
import type {Movie} from "@/app/moviesApi.types.ts";
import s from './FiltredMovies.module.css'

export const FilteredMovies = () => {
    const [sortBy, setSortBy] = useState<string>('popularity.desc');
    const [rating, setRating] = useState<[number, number]>([0, 10]);
    const [genres, setGenres] = useState<number[]>([]);
    const [page, setPage] = useState<number>(1);


    const debouncedRating = useDebounce(rating, 200);
    const isPopularitySort = sortBy.includes('popularity');
    const isTitleSort = sortBy.startsWith('title');

    const { data, isLoading } = useGetMoviesDiscoverQuery({
        sort_by: sortBy,
        'vote_average.gte': debouncedRating[0],
        'vote_average.lte': debouncedRating[1],
        with_genres: genres.join(','),
        page,
    });

    const sortedMovies = useMemo<Movie[]>(() => {
        if (!data?.results) return [];

        if (isTitleSort) {
            return [...data.results].sort((a, b) =>
                sortBy === 'title.asc'
                    ? a.title.localeCompare(b.title)
                    : b.title.localeCompare(a.title)
            );
        }
        if (isPopularitySort) {
            return [...data.results].sort((a, b) => {
                if (sortBy === 'popularity.asc') {
                    return a.popularity - b.popularity;
                } else {
                    return b.popularity - a.popularity;
                }
            });
        }
        return data.results;

    }, [data?.results, sortBy, isTitleSort, isPopularitySort]);

    const resetFilters = () => {
        setSortBy('popularity.desc');
        setRating([0, 10]);
        setGenres([]);
        setPage(1);
    };

    return (
        <div className={s.wrapper }>
            <FiltersPanel
                sortBy={sortBy}
                setSortBy={setSortBy}
                rating={rating}
                setRating={setRating}
                genres={genres}
                setGenres={setGenres}
                resetFilters={resetFilters}
            />

            <main className={s.box} >
                {isLoading && <p>Загрузка...</p>}

                <div className={s.container}>
                    {sortedMovies.map(movie => (
                        <MovieCard key={movie.id} movie={movie} width={150} height={250} />
                    ))}
                </div>

                <Pagination
                    page={page}
                    totalPages={data?.total_pages}
                    onChange={setPage}
                />
            </main>
        </div>
    );
};
