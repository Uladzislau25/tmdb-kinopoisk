import s from "./Pagination.module.css"
type Props = {
  page: number
  totalPages?: number | undefined
  onChange: (page: number) => void
}
export const Pagination = ({ page, totalPages = 1, onChange }: Props) => (
  <div className={s.container}>
    <button className={s.btn} disabled={page === 1} onClick={() => onChange(page - 1)}>
      ⬅︎ Back
    </button>
    <span>
      {page}/{totalPages}
    </span>
    <button className={s.btn} disabled={page === totalPages} onClick={() => onChange(page + 1)}>
      Next ➡︎
    </button>
  </div>
)
