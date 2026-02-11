import { useGetGenresQuery } from "@/app/moviesApi.ts"
import type { Dispatch, SetStateAction } from "react"
import { Rating } from "@/common/components/Rating/Rating.tsx"
import { SortSelect } from "@/common/components/SortSelect/SortSelect.tsx"
import s from "./FiltredPanel.module.css"

type Props = {
  sortBy: string
  setSortBy: Dispatch<SetStateAction<string>>

  rating: [number, number]
  setRating: Dispatch<SetStateAction<[number, number]>>

  genres: number[]
  setGenres: Dispatch<SetStateAction<number[]>>

  resetFilters: () => void
}

export const FiltersPanel = ({ sortBy, setSortBy, rating, setRating, genres, setGenres, resetFilters }: Props) => {
  const { data } = useGetGenresQuery()

  const toggleGenre = (id: number) => {
    setGenres((prev) => (prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id]))
  }

  return (
    <aside className={s.sorted}>
      <h3>Filters / Sort</h3>
      <SortSelect value={sortBy} onChange={setSortBy} />
      <Rating value={rating} onChange={setRating} />

      <div className={s.containerBtn}>
        {data?.genres.map((genre: any) => (
          <button
            key={genre.id}
            onClick={() => toggleGenre(genre.id)}
            className={`${s.genreBtn} ${genres.includes(genre.id) ? s.active : ""}`}
          >
            {genre.name}
          </button>
        ))}
      </div>
      <div className={s.resetBtnContainer}>
        <button onClick={resetFilters} className={s.btnReset}>
          Reset filters
        </button>
      </div>
    </aside>
  )
}
