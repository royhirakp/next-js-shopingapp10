"use clinet";

import { Paper } from "@mui/material";
import React from "react";
import SingupForm from "./parts/SingupForm";
import ButtonList from "../Login/parts/ButtonList";
import { useSelector } from "react-redux";

const Singup = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        width: {
          xs: "95%",
          sm: "80%",
          md: "43%",
        },
        padding: {
          xs: "2%",
          sm: "2%",
          md: "3%",
        },
        borderRadius: "15px",
      }}
    >
      <SingupForm />
      <ButtonList />
    </Paper>
  );
};

export default Singup;
