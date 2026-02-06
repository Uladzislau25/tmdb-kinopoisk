import s from './SectionTitle.module.css'
type Props = {
    title: string
}

export const SectionTitle = ({title}: Props) => {
    return (
        <div className={s.content}>
            <h2 className={s.title}>{title}</h2>
            <button className={s.button}>View more</button>
        </div>
    )
}