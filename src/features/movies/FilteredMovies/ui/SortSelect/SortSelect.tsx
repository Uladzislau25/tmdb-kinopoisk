import s from "./SortSelect.module.css"

const SORT_OPTIONS = [
  { label: "Popularity ↓", value: "popularity.desc" },
  { label: "Popularity ↑", value: "popularity.asc" },
  { label: "Rating ↓", value: "vote_average.desc" },
  { label: "Rating ↑", value: "vote_average.asc" },
  { label: "Release Date ↓", value: "release_date.desc" },
  { label: "Release Date ↑", value: "release_date.asc" },
  { label: "Title A-Z", value: "title.asc" },
  { label: "Title Z-A", value: "title.desc" },
]

type Props = {
  value: string
  onChange: (value: string) => void
}

export const SortSelect = ({ value, onChange }: Props) => {
  return (
    <div className={s.container}>
      <div className={s.label}>Sort By</div>

      <div className={s.selectContainer}>
        <select value={value} onChange={(e) => onChange(e.target.value)} className={s.select}>
          {SORT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        <div className={s.arrow}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
