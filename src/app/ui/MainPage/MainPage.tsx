import {SearchBar} from "@/common/components";
import s from './MainPage.module.css'
import {useMemo} from "react";
import {useGetPopularMoviesQuery} from "@/app/moviesApi.ts";
export const MainPage = () => {
    const {data} = useGetPopularMoviesQuery()
    const randomMovie = useMemo(() => {
        if (!data?.results.length) return null
        const index =  Math.floor(Math.random() * data.results.length);
        return data.results[index];
    }, [data])
    const backdropUrl = randomMovie?.backdrop_path
        ? `https://image.tmdb.org/t/p/original${randomMovie.backdrop_path}`
        : ''

    return (
       <div className={s.wrapper} style={{backgroundImage: `url(${backdropUrl})`}}>
           <div className={s.overlay}/>
               <div className={s.content}>
                   <h1 className={s.title}>Welcome</h1>
                   <h2 className={s.subtitle}>Browse higlihted titles from TMDB</h2>
                   <SearchBar/>
               </div>
       </div>
    )
}