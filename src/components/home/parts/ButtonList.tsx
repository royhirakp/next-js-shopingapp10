"use client";
import { Button, Stack, Typography, styled } from "@mui/material";
import React, { useState } from "react";

import { NewButton } from "@/components/muielements/GlobalButton";
const ButtonList = () => {
  const [activeButtonStatus, setActiveButtonStatus] = useState(-1);
  return (
    <Stack
      spacing={2}
      direction="row"
      justifyContent="center"
      pt={2.5}
      sx={{
        display: {
          xs: "none",
          sm: "flex",
        },
      }}
    >
      {["Electronics", "Flights", "Home appliences", "grocery", "Books"].map(
        (item, i) => {
          return (
            <Button
              key={i * 0.02}
              onClick={() => {
                setActiveButtonStatus(i);
              }}
              sx={{
                boxSizing: "border-box",
                borderBottom: `${
                  activeButtonStatus == i ? "2px solid" : "none"
                }`,
                textTransform: "none",
                color: "black",
                fontSize: {
                  xs: "55%",
                  sm: "65%",
                  md: "75%",
                },
              }}
              variant="text"
            >
              {item}
            </Button>
          );
        }
      )}

      {/* <NewButton sx={{ borderBottom: "2px solid" }} variant="text">
        Books
      </NewButton>
      <NewButton sx={{ borderBottom: "2px solid" }} variant="text">
        grocery
      </NewButton>
      <NewButton sx={{ borderBottom: "2px solid" }} variant="text">
        Home appliences
      </NewButton>
      <NewButton sx={{ borderBottom: "2px solid" }} variant="text">
        Flights
      </NewButton>{" "} */}
    </Stack>
  );
};

export default ButtonList;
