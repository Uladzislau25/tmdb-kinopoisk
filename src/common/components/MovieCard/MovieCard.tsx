import { useState } from "react";
import s from "./MovieCard.module.css";
import * as React from "react";
import type {Movie} from "@/app/moviesApi.types.ts";

const placeholder = "https://placehold.co/300x450?text=No+Poster";

type Props ={
    movie: Movie
    onClick?: (movie: Movie) => void;
    width?: number;
    height?: number;
}

export const MovieCard = ({ movie, onClick, width=220, height=330 }: Props) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const handleClick = () => {
        onClick?.(movie)
    }
    const handleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setIsFavorite((prev) => !prev);
    };

    return (
        <div
            className={s.wrapper}
            onClick={handleClick}
            style={{width: `${width}px`}}
        >
            {/* Постер */}
            <div className={s.posterWrapper} style={{height:`${height}px`}}>
                <img
                    src={movie.poster_path? `https://image.tmdb.org/t/p/w300${movie.poster_path}`: placeholder}
                    alt={movie.title}
                    className={s.poster}
                />

                {/* Сердце */}
                <button
                    className={isFavorite ? s.favoriteBtnActive: s.favoriteBtn}
                    onClick={handleFavorite}
                >
          <span
              className={
                  isFavorite
                      ? s.heartActive
                      : s.heart
              }
          >
            ❤️
          </span>
                </button>

                {/* Рейтинг */}
                <div className={s.rating}>
                    {movie.vote_average !== undefined? movie.vote_average.toFixed(1): '-'}
                </div>
            </div>

            {/* Название */}
            <p className={s.title}>
                {movie.title}
            </p>
        </div>
    );
}
