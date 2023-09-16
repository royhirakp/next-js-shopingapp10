"use client";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import Home from "../../components/home/Home";

const page = () => {
  // const data = useSelector((s) => s);
  // const counter = useSelector((state: RootState) => state);
  // console.log("counrwe headerr=====", counter);
  // console.log("main home appppp=====", data);
  return (
    <div>
      <Home />
    </div>
  );
};

export default page;
