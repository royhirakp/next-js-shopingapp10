"use client";
import Cart from "@/components/cart/Cart";
import React from "react";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import StoreProvidor from "@/redux/StoreProvidor";
const page = () => {
  return (
    <div>
      <Cart />
    </div>
  );
};

export default page;
