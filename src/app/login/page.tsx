import React from "react";
import Login from "../../components/Login/Ligin";
import { Stack } from "@mui/material";
import { useSelector } from "react-redux";
const page = () => {
  // const data = useSelector((s) => s);
  // console.log("data=====", data);
  return (
    <Stack justifyContent="center" alignItems="center" height="100%">
      <Login />
    </Stack>
  );
};

export default page;
