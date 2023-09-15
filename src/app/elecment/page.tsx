"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <div>
      <Box>
        <Stack spacing={2} direction="row">
          <Button
            sx={{
              textTransform: "none",
              width: {
                xs: "66px",
                sm: "70x",
                md: "75px",
              },
              fontSize: {
                xs: "13px",
                sm: "15px",
                md: "17px",
              },
              padding: "0",
              height: {
                xs: "26px",
                sm: "28px",
                md: "30px",
              },
              "&.MuiButton-root": {
                backgroundColor: "red",
                // width: "10px",
              },
            }}
            variant="contained"
          >
            button
          </Button>
        </Stack>

        <Box sx={{ width: "100%", maxWidth: 500 }}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontSize: {
                xs: "1.35rem", // Extra small screens (e.g., mobile phones)
                sm: "1.65rem", // Small screens (e.g., tablets)
                md: "1.95rem", // Medium screens (e.g., laptops)
                lg: "2.15rem",
              },
            }}
          >
            h5. Heading
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontSize: {
                xs: "1.2rem", // Extra small screens (e.g., mobile phones)
                sm: "1.5rem", // Small screens (e.g., tablets)
                md: "1.8rem", // Medium screens (e.g., laptops)
                lg: "2rem",
              },
            }}
          >
            h6. Heading
          </Typography>

          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontSize: {
                xs: "0.95rem", // Extra small screens (e.g., mobile phones)
                sm: "1.1rem", // Small screens (e.g., tablets)
                md: "1.3rem", // Medium screens (e.g., laptops)
                lg: "1.4rem",
              },
            }}
          >
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              fontSize: {
                xs: "1rem", // Extra small screens (e.g., mobile phones)
                sm: "1.15rem", // Small screens (e.g., tablets)
                md: "1.35rem", // Medium screens (e.g., laptops)
                lg: "1.45rem",
              },
            }}
          >
            body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default page;
