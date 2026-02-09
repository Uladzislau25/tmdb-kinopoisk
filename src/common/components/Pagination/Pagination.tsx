
type Props = {
    page: number;
    totalPages?: number;
    onChange: (page: number) => void;
}
export const Pagination = ({ page, totalPages = 1, onChange }: Props) => (
    <div style={{ marginTop: 24 }}>
        <button disabled={page === 1} onClick={() => onChange(page - 1)}>Назад</button>
        <span style={{ margin: '0 12px' }}>{page}/{totalPages}</span>
        <button disabled={page === totalPages} onClick={() => onChange(page + 1)}>Вперёд</button>
    </div>
);