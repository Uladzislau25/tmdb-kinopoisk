import { useGetPopularMoviesQuery } from "@/app/moviesApi.ts";
import {MovieCard, updateVisibleCards} from "@/common/components";
import s from './PopularMovie.module.css';
import { useEffect, useRef } from "react";

export const PopularMovie = () => {
    const { data } = useGetPopularMoviesQuery();
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => {
            updateVisibleCards(containerRef.current, 180, 20); // карточки 180px
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // сразу после рендера

        return () => window.removeEventListener('resize', handleResize);
    }, [data]);

    const movies = data?.results ?? [];

    return (
        <div ref={containerRef} className={s.container}>
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} width={180} />
            ))}
        </div>
    );
};


