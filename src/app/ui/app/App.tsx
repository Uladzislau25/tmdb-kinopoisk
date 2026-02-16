import { ThemeProvider } from "@mui/material/styles"
import { Routing } from "@/common/routing"
import s from "./App.module.css"
import { useGlobalLoading, useThemeMode } from "@/common/hooks"
import { getTheme } from "@/common/theme/theme.ts"
import { CssBaseline, LinearProgress } from "@mui/material"
import { Footer } from "@/common/components"
import { Header } from "@/common/components/Header/Header.tsx"
import { ToastContainer } from "react-toastify"

export const App = () => {
  const themeMode = useThemeMode()
  const theme = getTheme(themeMode)
  const isGlobalLoading = useGlobalLoading()

  return (
    <ThemeProvider theme={theme}>
      <div className={s.app}>
        <CssBaseline />
        <Header />
        {isGlobalLoading && <LinearProgress />}
        <main className={s.layout}>
          <Routing />
          <ToastContainer />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
