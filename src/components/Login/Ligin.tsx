"use client";
import React from "react";
import { Paper } from "@mui/material";
import ButtonList from "./parts/ButtonList";
import LoginForm from "./parts/LoginForm";
import {
  NewButton,
  NewTypography,
} from "../../components/muielements/GlobalButton";

const Ligin = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        width: {
          xs: "95%",
          sm: "60%",
          md: "45%",
          lg: "32%",
        },
        padding: {
          xs: "2%",
          sm: "2%",
          md: "3%",
        },
        borderRadius: "15px",
      }}
    >
      <LoginForm />
      <ButtonList />
    </Paper>
  );
};

export default Ligin;
