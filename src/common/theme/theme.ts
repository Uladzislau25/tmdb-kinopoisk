import { createTheme, type Theme } from "@mui/material/styles"

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ":root": {
          "--link-color": "#1f2937",
          "--link-hover-color": "#646cff",
          "--link-active": "#1a1a1a",
          "--link-active-bg": "#e5e7eb",
          "--appbar-bg": "#ececec",
          "--span-color": "#9ca3af",
          "--btn-color": "#e5e7eb",
          "--btn-border-color": "#d1d5db",
          "--rating-color": "#4b5563",
        },
      },
    },
  },
})

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },
    background: {
      default: "#0b1120",
      paper: "#1e293b",
    },
    text: {
      primary: "#ffffff",
      secondary: "rgba(255, 255, 255, 0.7)",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ":root": {
          "--link-color": "#f8fafc",
          "--link-hover-color": "#4f46e5",
          "--link-active": "#f8fafc",
          "--link-active-bg": "#1f2b40",
          "--appbar-bg": "#141c2c",
          "--span-color": "#9ca3af",
          "--btn-color": "#141c2c",
          "--btn-border-color": "#27354f",
          "--rating-color": "#94a3b8",
        },
      },
    },
  },
})

export const getTheme = (mode: "light" | "dark"): Theme => {
  return mode === "light" ? lightTheme : darkTheme
}
