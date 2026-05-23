"use client";

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { ReactNode } from "react";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#111111" },
    background: {
      default: "#f3f4f6",
      paper: "#ffffff",
    },
    text: {
      primary: "#111111",
      secondary: "#5f6368",
    },
    divider: "#e5e7eb",
  },
  shape: {
    borderRadius: 14,
  },
  typography: {
    fontFamily: '"Manrope", sans-serif',
    h3: { fontWeight: 800, letterSpacing: "-0.02em" },
    h4: { fontWeight: 750, letterSpacing: "-0.01em" },
    h6: { fontWeight: 700 },
    button: { textTransform: "none", fontWeight: 650 },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          border: "1px solid #e5e7eb",
          boxShadow: "0 1px 2px rgba(16,24,40,0.04)",
        },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { borderRadius: 10 },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: { paddingLeft: 20, paddingRight: 20 },
      },
    },
  },
});

export default function MuiProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
