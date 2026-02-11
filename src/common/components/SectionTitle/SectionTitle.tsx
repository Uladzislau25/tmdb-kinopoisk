import { Link } from "react-router"
import s from "./SectionTitle.module.css"
import { Path } from "@/common/routing"
type Props = {
  title: string
  params: string
}

export const SectionTitle = ({ title, params }: Props) => {
  return (
    <div className={s.content}>
      <h2 className={s.title}>{title}</h2>
      <Link className={s.button} to={`${Path.Category}?type=${params}&page=1`}>
        View more
      </Link>
    </div>
  )
}
