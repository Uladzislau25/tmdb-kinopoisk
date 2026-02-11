import { Route, Routes } from "react-router"
import { MainPage } from "@/features/movies/ui/MainPage/MainPage.tsx"
import { CategoryMovies } from "@/features/movies/ui/CategoryMovies/CategoryMovies.tsx"
import { FilteredMovies } from "@/features/movies/ui/FilteredMovies/FilteredMovies.tsx"
import { Search } from "@/features/movies/ui/Search/Search.tsx"
import { Favorites } from "@/features/movies/ui/Favorites/Favorites.tsx"

export const Path = {
  Main: "/",
  Category: "/category",
  Filtred: "/filtred",
  Search: "/search",
  Favorite: "/favorite",
} as const

export const Routing = () => (
  <Routes>
    <Route path={Path.Main} element={<MainPage />} />
    <Route path={Path.Category} element={<CategoryMovies />} />
    <Route path={Path.Filtred} element={<FilteredMovies />} />
    <Route path={Path.Search} element={<Search />} />
    <Route path={Path.Favorite} element={<Favorites />} />
  </Routes>
)
