import { SearchBar } from "@/common/components"
import s from "./MainPage.module.css"
import { useMemo } from "react"
import { PopularMovie } from "@/features/movies/CategoryMovies/ui/PopularMovie/PopularMovie.tsx"
import { SectionTitle } from "@/common/components/SectionTitle/SectionTitle.tsx"
import { TopRatedMovies } from "@/features/movies/CategoryMovies/ui/TopRatedMovies/TopRatedMovies.tsx"
import { UpcomingMovie } from "@/features/movies/CategoryMovies/ui/UpcomingMovie/UpcomingMovie.tsx"
import { NowPlayingMovies } from "@/features/movies/CategoryMovies/ui/NowPlayingMovies/NowPlayingMovies.tsx"
import { useGetPopularMoviesQuery } from "@/features/movies/MainPage/api/mainApi.ts"
import { MovieSkeleton } from "@/common/components/MovieSkeleton/MovieSkeleton.tsx"

export const MainPage = () => {
  const { data, isLoading } = useGetPopularMoviesQuery()

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
        <div className={s.box}>{isLoading ? <MovieSkeleton /> : <PopularMovie />}</div>
      </section>
      <section className={s.section}>
        <SectionTitle title={"Top Rated Movies"} params={"top_rated"} />
        <div className={s.box}>{isLoading ? <MovieSkeleton /> : <TopRatedMovies />}</div>
      </section>
      <section className={s.section}>
        <SectionTitle title={"Upcoming Movies"} params={"upcoming"} />
        <div className={s.box}>{isLoading ? <MovieSkeleton /> : <UpcomingMovie />}</div>
      </section>
      <section className={s.section}>
        <SectionTitle title={"Now Playing Movies"} params={"now_playing"} />
        <div className={s.box}>{isLoading ? <MovieSkeleton /> : <NowPlayingMovies />}</div>
      </section>
    </>
  )
}
