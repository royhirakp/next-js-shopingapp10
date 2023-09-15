"use client";
import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Box, Stack, Typography } from "@mui/material";
interface RatingProps {
  rate: number;
  count: string;
}
const Ratting: React.FC<RatingProps> = ({ rate, count }) => {
  return (
    <Stack direction="row">
      <Rating style={{ width: "40%" }} value={rate} readOnly />
      <Typography
        sx={{
          padding: "0",
          fontSize: {
            xs: "60%",
            sm: "85%",
            md: "90%",
          },
        }}
        variant="body2"
        color="text.secondary"
      >
        {count} reviews
      </Typography>
    </Stack>
    // </div>
  );
};

export default Ratting;
