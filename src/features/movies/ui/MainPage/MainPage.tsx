import { SearchBar } from "@/common/components"
import s from "./MainPage.module.css"
import { useMemo } from "react"
import { useGetPopularMoviesQuery } from "@/app/moviesApi.ts"
import { PopularMovie } from "@/features/movies/ui/CategoryMovies/PopularMovie/PopularMovie.tsx"
import { SectionTitle } from "@/common/components/SectionTitle/SectionTitle.tsx"
import { TopRatedMovies } from "@/features/movies/ui/CategoryMovies/TopRatedMovies/TopRatedMovies.tsx"
import { UpcomingMovie } from "@/features/movies/ui/CategoryMovies/UpcomingMovie/UpcomingMovie.tsx"
import { NowPlayingMovies } from "@/features/movies/ui/CategoryMovies/NowPlayingMovies/NowPlayingMovies.tsx"
export const MainPage = () => {
  const { data } = useGetPopularMoviesQuery()
  const randomMovie = useMemo(() => {
    if (!data?.results.length) return null
    const index = Math.floor(Math.random() * data.results.length)
    return data.results[index]
  }, [data])
  const backdropUrl = randomMovie?.backdrop_path
    ? `https://image.tmdb.org/t/p/original${randomMovie.backdrop_path}`
    : ""

  return (
    <>
      <div className={s.wrapper} style={{ backgroundImage: `url(${backdropUrl})` }}>
        <div className={s.overlay} />
        <div className={s.content}>
          <h1 className={s.title}>Welcome</h1>
          <h2 className={s.subtitle}>Browse higlihted titles from TMDB</h2>
          <SearchBar />
        </div>
      </div>
      <section className={s.section}>
        <SectionTitle title={"Popular Movies"} params={"popular"} />
        <div className={s.box}>
          <PopularMovie />
        </div>
      </section>
      <section className={s.section}>
        <SectionTitle title={"Top Rated Movies"} params={"top_rated"} />
        <div className={s.box}>
          <TopRatedMovies />
        </div>
      </section>
      <section className={s.section}>
        <SectionTitle title={"Upcoming Movies"} params={"upcoming"} />
        <div className={s.box}>
          <UpcomingMovie />
        </div>
      </section>
      <section className={s.section}>
        <SectionTitle title={"Now Playing Movies"} params={"now_playing"} />
        <div className={s.box}>
          <NowPlayingMovies />
        </div>
      </section>
    </>
  )
}
