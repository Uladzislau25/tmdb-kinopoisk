import { selectThemeMode} from "@/app/app-slice"
import { ThemeProvider } from "@mui/material/styles"
import { Routing } from "@/common/routing"
import s from "./App.module.css"
import {useAppSelector} from "@/common/hooks";
import {getTheme} from "@/common/theme/theme.ts";
import {CssBaseline} from "@mui/material";
import {Footer} from "@/common/components";
import {Header} from "@/common/components/Header/Header.tsx";


export const App = () => {
    const themeMode = useAppSelector(selectThemeMode)
    const theme =  getTheme(themeMode)

    return (
        <ThemeProvider theme={theme}>
           <div className={s.app}>
               <CssBaseline />
               <Header />
               <div className={s.layout}>
                   <Routing />
               </div>
               <Footer />
           </div>
        </ThemeProvider>
    )
}
