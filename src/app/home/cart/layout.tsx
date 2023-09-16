"use client";
import { Box, Stack, ThemeProvider } from "@mui/material";
// import { theme } from "../../theme/muiTheam";
// import Header from "../../components/home/parts/Header";
// import ButtonList from "../../components/home/parts/ButtonList";
import Footer from "@/components/home/parts/Footer";
import StoreProvidor from "@/redux/StoreProvidor";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StoreProvidor>{children}</StoreProvidor>
    </>
  );
}
