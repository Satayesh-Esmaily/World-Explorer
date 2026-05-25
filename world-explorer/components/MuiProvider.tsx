"use client";

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { ReactNode } from "react";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#071423" },
    secondary: { main: "#12b76a" },
    background: {
      default: "#040b14",
      paper: "#071423",
    },
    text: {
      primary: "#e8f1fb",
      secondary: "#9fb3c8",
    },
    divider: "#17314b",
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
          border: "1px solid #17314b",
          boxShadow: "0 8px 24px rgba(1, 9, 20, 0.45)",
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
