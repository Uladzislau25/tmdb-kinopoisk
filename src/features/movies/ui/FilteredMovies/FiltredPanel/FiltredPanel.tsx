import {useGetGenresQuery} from "@/app/moviesApi.ts";
import type {Dispatch, SetStateAction} from "react";
import {Rating} from "@/common/components/Rating/Rating.tsx";

const SORT_OPTIONS = [
{ label: 'Популярность ↓', value: 'popularity.desc' },
{ label: 'Популярность ↑', value: 'popularity.asc' },
{ label: 'Рейтинг ↓', value: 'vote_average.desc' },
{ label: 'Рейтинг ↑', value: 'vote_average.asc' },
{ label: 'Дата ↓', value: 'release_date.desc' },
{ label: 'Дата ↑', value: 'release_date.asc' },
{ label: 'Название A-Z', value: 'title.asc' },
{ label: 'Название Z-A', value: 'title.desc' },
];
type Props = {
    sortBy: string;
    setSortBy: Dispatch<SetStateAction<string>>;

    rating: [number, number];
    setRating: Dispatch<SetStateAction<[number, number]>>;

    genres: number[];
    setGenres: Dispatch<SetStateAction<number[]>>;

    resetFilters: ()=> void;
}


export const FiltersPanel = ({
                                 sortBy,
                                 setSortBy,
                                 rating,
                                 setRating,
                                 genres,
                                 setGenres,
                                 resetFilters,
                             }: Props) => {
    const {data} = useGetGenresQuery();


    const toggleGenre = (id: number) => {
        setGenres((prev) =>
            prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id]
        );
    };


    return (
        <aside style={{width: 300}}>
            <h3>Сортировка</h3>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                {SORT_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
            <Rating value={rating} onChange={setRating} />



            <h3>Жанры</h3>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 8}}>
                {data?.genres.map((genre: any) => (
                    <button
                        key={genre.id}
                        onClick={() => toggleGenre(genre.id)}
                        style={{
                            background: genres.includes(genre.id) ? '#333' : '#eee',
                            color: genres.includes(genre.id) ? '#fff' : '#000',
                        }}
                    >
                        {genre.name}
                    </button>
                ))}
            </div>


            <button onClick={resetFilters}>Сбросить фильтры</button>
        </aside>
    );
};