import { SearchBar } from "@/common/components"
import s from "./MainPage.module.css"
import { useMemo } from "react"
import { SectionTitle } from "@/features/movies/MainPage/ui/SectionTitle/SectionTitle.tsx"
import {
  useGetNowPlayingMoviesQuery,
  useGetPopularMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetUpcomingMoviesQuery,
} from "@/features/movies/MainPage/api/mainApi.ts"
import { MovieSkeleton } from "@/common/components/MovieSkeleton/MovieSkeleton.tsx"
import { MovieSection } from "@/features/movies/MainPage/ui/MovieSection/MovieSection.tsx"

export const MainPage = () => {
  const { data, isFetching } = useGetPopularMoviesQuery()
  const { data: topRatedMovies } = useGetTopRatedMoviesQuery()
  const { data: upcomingMovies } = useGetUpcomingMoviesQuery()
  const { data: nowPlayingMovies } = useGetNowPlayingMoviesQuery()

  const randomMovie = useMemo(() => {
    if (!data?.results.length) return null
    const index = Math.floor(Math.random() * data.results.length)
    return data.results[index]
  }, [data])

  const backdropUrl = randomMovie?.backdrop_path
    ? `https://image.tmdb.org/t/p/original${randomMovie.backdrop_path}`
    : ""

  return (
    <section className={s.sectionMain}>
      <div className={s.wrapper} style={{ backgroundImage: `url(${backdropUrl})` }}>
        <div className={s.overlay} />
        <div className={s.content}>
          <h1 className={s.title}>Welcome</h1>
          <h2 className={s.subtitle}>Browse higlihted titles from TMDB</h2>
          <SearchBar />
        </div>
      </div>
      <div className={s.section}>
        <SectionTitle title={"Popular Movies"} params={"popular"} />
        <div className={s.box}>
          {isFetching ? (
            <MovieSkeleton columns={6} rows={1} width={180} height={260} />
          ) : (
            <MovieSection movies={data?.results} />
          )}
        </div>
      </div>
      <div className={s.section}>
        <SectionTitle title={"Top Rated Movies"} params={"top_rated"} />
        <div className={s.box}>
          {isFetching ? (
            <MovieSkeleton columns={6} rows={1} width={180} height={260} />
          ) : (
            <MovieSection movies={topRatedMovies?.results} />
          )}
        </div>
      </div>
      <div className={s.section}>
        <SectionTitle title={"Upcoming Movies"} params={"upcoming"} />
        <div className={s.box}>
          {isFetching ? (
            <MovieSkeleton columns={6} rows={1} width={180} height={260} />
          ) : (
            <MovieSection movies={upcomingMovies?.results} />
          )}
        </div>
      </div>
      <div className={s.section}>
        <SectionTitle title={"Now Playing Movies"} params={"now_playing"} />
        <div className={s.box}>
          {isFetching ? (
            <MovieSkeleton columns={6} rows={1} width={180} height={260} />
          ) : (
            <MovieSection movies={nowPlayingMovies?.results} />
          )}
        </div>
      </div>
    </section>
  )
}
