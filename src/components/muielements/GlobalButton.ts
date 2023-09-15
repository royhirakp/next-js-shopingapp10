"use client";
import { Box, Button, Stack, Typography, styled } from "@mui/material";
export const NewButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  color: "black",
  [theme.breakpoints.up("xs")]: {
    "&.MuiButton-contained": {
      backgroundColor: "red",
      width: "2%",
      fontSize: "49%",
    },
  },

  [theme.breakpoints.up("sm")]: {
    "&.MuiButton-contained": {
      backgroundColor: "blue",
      width: "3%",
      fontSize: "58%",
    },
  },
  [theme.breakpoints.up("md")]: {
    "&.MuiButton-contained": {
      backgroundColor: "green",
      width: "%6",
      fontSize: "63%",
    },
  },
}));

export const NewTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    fontSize: "90%",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "150%",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "170%",
  },
}));

const Icons = styled(Box)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  display: "none",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  display: "flex",
  alignItems: "center",
  gap: "2px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
