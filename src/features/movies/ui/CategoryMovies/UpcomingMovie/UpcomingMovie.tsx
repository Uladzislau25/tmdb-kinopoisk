
import {MovieCard, updateVisibleCards} from "@/common/components";
import s from './UpcomingMovie.module.css';
import { useEffect, useRef } from "react";
import {useGetUpcomingMoviesQuery} from "@/app/moviesApi.ts";

export const UpcomingMovie = () => {
    const { data: upcomingMovie} = useGetUpcomingMoviesQuery();
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => {
            updateVisibleCards(containerRef.current, 180, 20); // карточки 180px
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // сразу после рендера

        return () => window.removeEventListener('resize', handleResize);
    }, [upcomingMovie]);

    const movies = upcomingMovie?.results ?? [];

    return (
        <div ref={containerRef} className={s.container}>
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} width={180} height={260} />
            ))}
        </div>
    );
};