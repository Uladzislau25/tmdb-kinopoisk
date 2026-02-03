import {Link, NavLink} from "react-router";
import s from "./Header.module.css";
import {Path} from "@/common/routing";
import {changeThemeModeAC, selectThemeMode} from "@/app/app-slice.ts";
import {useAppDispatch, useAppSelector} from "@/common/hooks";
import Switch from "@mui/material/Switch";
import logo from '@/assets/image/blue_short.svg'


const navItems = [
    {to: Path.Main, label: 'Main'},
    {to: Path.Category, label: 'Category'},
    {to: Path. Filtred, label: 'Filtred'},
    {to: Path.Search, label: 'Search'},
    {to: Path.Favorite, label: 'Favorite'},

]

export const Header = ()=>{
    const themeMode = useAppSelector(selectThemeMode)

    const dispatch = useAppDispatch()
    const changeMode = () => {
        dispatch(changeThemeModeAC({ themeMode: themeMode === "light" ? "dark" : "light" }))
    }
    return (
        <header className={s.container}>

               <Link to="/" className={s.logo} >
                   <img src={logo} className={s.logo} alt="Logo TMBD"/>
               </Link>
                       <nav>
                <ul className={s.list}>
                    {navItems.map((item) => (
                        <li key={item.to}>
                            <NavLink to={item.to} className={({ isActive }) => isActive ? s.activeLink: s.link}>
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            <div>
                <Switch color={'default'} onChange={changeMode}/>
            </div>
        </header>
    )
}