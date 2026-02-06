import {useEffect, useState} from "react";
import {useLocation, useNavigate, useSearchParams} from "react-router";
import s from './SearchBar.module.css'
import * as React from "react";


export const SearchBar = () => {
    const navigate = useNavigate();
    const [params] = useSearchParams()
    const location = useLocation();

    const isSearchPage = location.pathname === '/search';
    const urlQuery = isSearchPage ? params.get('query') || '': '' ;
    const [query, setQuery] = useState(urlQuery);

    useEffect(() => {
        if (isSearchPage){
            setQuery(urlQuery);
        }
    }, [urlQuery, isSearchPage]);

    useEffect(() => {
        if (!isSearchPage) return;

        const timer = setTimeout(() => {
            if (query.trim()) {
                navigate(`/search?query=${query}&page=1`);
            }
        }, 500);

        return () => clearTimeout(timer);
    }, [query]);


    const handlerSearch = () => {
        if(!query.trim()) return


        navigate(`/search?query=${encodeURIComponent(query)}&page=1`);
    }

    const handlerReset = () => {
        setQuery('');
        if(isSearchPage){
            navigate('/search');
        }
    }

    const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value)

        if(isSearchPage && !value.trim()) {
            navigate('/search');
        }
    }
    return (
        <div className={s.searchBar}>
            <div className={s.searchWrapper}>
                <input className={s.input} type="text" placeholder='Search for a movie' value={query} onChange={handlerChange} onKeyDown={(e) => e.key === 'Enter' && handlerSearch()} />
                {query.length > 0 && (
                    <button className={s.clearBtn} onClick={handlerReset}>x</button>
                )}
            </div>
            <button className={s.button} onClick={handlerSearch} disabled={!query.trim()}>Search</button>
        </div>
    )
}