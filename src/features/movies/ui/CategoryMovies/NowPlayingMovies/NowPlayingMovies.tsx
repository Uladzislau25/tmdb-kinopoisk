import {MovieCard, updateVisibleCards} from "@/common/components";
import s from './NowPlayingMovies.module.css';
import { useEffect, useRef } from "react";
import {useGetNowPlayingMoviesQuery} from "@/app/moviesApi.ts";

export const NowPlayingMovies = () => {
    const { data: nowPlayingMovies} = useGetNowPlayingMoviesQuery();
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => {
            updateVisibleCards(containerRef.current, 180, 20); // карточки 180px
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // сразу после рендера

        return () => window.removeEventListener('resize', handleResize);
    }, [ nowPlayingMovies]);

    const movies =  nowPlayingMovies?.results ?? [];

    return (
        <div ref={containerRef} className={s.container}>
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} width={180} />
            ))}
        </div>
    );
};