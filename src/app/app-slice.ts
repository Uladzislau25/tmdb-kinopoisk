import { createSlice } from "@reduxjs/toolkit"

export type ThemeMode = "dark" | "light"

const getInitialTheme = (): ThemeMode => {
  const saved = localStorage.getItem("themeMode")
  return saved ? (JSON.parse(saved) as ThemeMode) : "dark"
}

export const appSlice = createSlice({
  name: "app",
  initialState: {
    themeMode: getInitialTheme(),
  },
  selectors: {
    selectThemeMode: (state) => state.themeMode,
  },
  reducers: (create) => ({
    changeThemeModeAC: create.reducer<{ themeMode: ThemeMode }>((state, action) => {
      state.themeMode = action.payload.themeMode
      localStorage.setItem("themeMode", JSON.stringify(action.payload.themeMode))
    }),
  }),
})

export const { selectThemeMode } = appSlice.selectors
export const { changeThemeModeAC } = appSlice.actions
export const appReducer = appSlice.reducer
