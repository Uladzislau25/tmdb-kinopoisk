import s from './PageNotFound.module.css'
import { useNavigate } from "react-router"

export const PageNotFound = () => {
  const navigate = useNavigate();

  const toMainPageHandler = ()=>{
    navigate('/')
  }

  return (
    <section className={s.wrapper}>
      <h1 className={s.title}>404</h1>
      <p className={s.text}>Page not found. We can’t find what you’re looking for</p>
      <button className={s.btn} onClick={toMainPageHandler}>⬅︎ To main page</button>
    </section>
  )
}