import { createSlice } from "@reduxjs/toolkit"
import type { FavoriteMovie, ThemeMode } from "@/app/type/types.ts"

const getInitialTheme = (): ThemeMode => {
  const saved = localStorage.getItem("themeMode")
  return saved ? (JSON.parse(saved) as ThemeMode) : "dark"
}

const getStoredFavorites = (): FavoriteMovie[] => {
  const saved = localStorage.getItem("favorites")
  return saved ? (JSON.parse(saved) as FavoriteMovie[]) : []
}

export const appSlice = createSlice({
  name: "app",
  initialState: {
    themeMode: getInitialTheme(),
    favorites: getStoredFavorites(),
  },
  selectors: {
    selectThemeMode: (state) => state.themeMode,
    selectFavorites: (state) => state.favorites,
    selectIsFavorite: (state, movieId: number) => state.favorites.some((m) => m.id === movieId),
  },
  reducers: (create) => ({
    changeThemeModeAC: create.reducer<{ themeMode: ThemeMode }>((state, action) => {
      state.themeMode = action.payload.themeMode
      localStorage.setItem("themeMode", JSON.stringify(action.payload.themeMode))
    }),
    toggleFavoriteAC: create.reducer<{ movie: FavoriteMovie }>((state, action) => {
      const movie = action.payload.movie
      const exist = state.favorites.find((m) => m.id === movie.id)

      if (exist) {
        state.favorites = state.favorites.filter((m) => m.id !== movie.id)
      } else {
        state.favorites.push(movie)
      }
      localStorage.setItem("favorites", JSON.stringify(state.favorites))
    }),
  }),
})

export const { selectThemeMode, selectIsFavorite, selectFavorites } = appSlice.selectors
export const { changeThemeModeAC, toggleFavoriteAC } = appSlice.actions
export const appReducer = appSlice.reducer
