"use client";
import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1760a5",
      light: "skyblue",
    },
    secondary: {
      main: "##15c630",
    },
  },
  typography: {
    h1: {
      fontSize: "2rem",
    },
    h2: {
      fontSize: "1.5rem",
    },
    body1: {
      fontSize: "1rem",
    },
    body2: {
      fontSize: "0.875rem",
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "contained" },
          style: {
            "&.MuiButton-contained": {
              color: "yellow",
              backgroundColor: "red",
            },
            "&.MuiButton-outlined": {
              color: "brown",
            },
            "&:hover": {
              backgroundColor: "blue",
            },
            textTransform: "none",
          },
        },
        {
          props: { variant: "text" },
          style: {
            color: "green",
          },
        },
      ],
    },
  },
});
