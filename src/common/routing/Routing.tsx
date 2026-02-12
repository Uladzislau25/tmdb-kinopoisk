import { Route, Routes } from "react-router"
import { MainPage } from "@/features/movies/MainPage/ui/MainPage.tsx"
import { CategoryMovies } from "@/features/movies/CategoryMovies/ui/CategoryMovies.tsx"
import { FilteredMovies } from "@/features/movies/FilteredMovies/ui/FilteredMovies.tsx"
import { Search } from "@/features/movies/Search/ui/Search.tsx"
import { Favorites } from "@/features/movies/Favorites/Favorites.tsx"

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
