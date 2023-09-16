"use client";
import { Box, Stack, ThemeProvider } from "@mui/material";
import { theme } from "../../theme/muiTheam";
import Header from "../../components/home/parts/Header";
import ButtonList from "../../components/home/parts/ButtonList";
import Footer from "@/components/home/parts/Footer";
import StoreProvidor from "@/redux/StoreProvidor";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <StoreProvidor>
    <Stack minHeight="100vh">
      <Box>
        <Header />
      </Box>
      <Box
        sx={{
          boxSizing: "border-box",
          width: {
            xs: "90%",
            sm: "90%",
            md: "70%",
          },
          margin: "0 auto 0 auto",
          minWidth: {
            xs: "100%",
            sm: "100%",
            md: "100%",
            lg: "1000px",
          },
        }}
      >
        <Box flex={1} sx={{ marginTop: "53px" }}>
          <ButtonList />
        </Box>
        {children}
      </Box>
      <Box mt="auto">
        <Footer />
      </Box>
    </Stack>
    // </StoreProvidor>
  );
}
