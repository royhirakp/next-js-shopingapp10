"use client";
import { IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import { typoText } from "@/components/muielements/stylesWithBP";
const ButtonList = () => {
  return (
    <>
      <Typography
        variant="body1"
        sx={{
          ...typoText,
          width: "100%",
          textAlign: "center",
          marginTop: "10%",
        }}
      >
        <b>or singup using</b>
      </Typography>
      <Stack
        direction="row"
        spacing={0}
        justifyContent="center"
        alignItems="center"
      >
        <IconButton aria-label="delete">
          <FacebookIcon />
        </IconButton>
        <IconButton color="secondary" aria-label="add an alarm">
          <GoogleIcon />
        </IconButton>
        <IconButton color="primary" aria-label="add to shopping cart">
          <TwitterIcon />
        </IconButton>
      </Stack>
    </>
  );
};

export default ButtonList;
