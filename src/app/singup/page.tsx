import Singup from "@/components/singUp/Singup";
import { Box } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Singup />
    </Box>
  );
};

export default page;
