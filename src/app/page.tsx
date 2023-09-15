"use client";
import React from "react";
import Login from "../components/Login/Ligin";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Login />
    </Box>
  );
}
