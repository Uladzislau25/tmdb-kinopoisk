import s from "./BackButton.module.css"
import { useLocation, useNavigate } from "react-router"

export const BackButton = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from

  return (
    <button onClick={() => navigate(from || -1)} className={s.btn}>
      ⬅ Back
    </button>
  )
}
