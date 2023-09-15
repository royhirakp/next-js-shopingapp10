"use client";
import { useRouter } from "next/navigation";
import React from "react";

import {
  AppBar,
  Box,
  InputBase,
  Toolbar,
  Typography,
  styled,
  Avatar,
  Stack,
  IconButton,
  Divider,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import {
  typoHeading2,
  typoText,
  typoHeading1,
} from "@/components/muielements/stylesWithBP";
import { LoginFormAvtar } from "@/components/muielements/stylesWithBP";

import Drawar from "./Drawar";
interface MenuButtonAndLoGoProps {
  handelFunction: () => void; // Define the type of the handleFunction prop
}
// import { theme } from "@/app/home2/theme";
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  padding: "0",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 1px",
  borderRadius: theme.shape.borderRadius,
}));

const ButtonsList = () => {
  const router = useRouter();
  const iconbuttonStyle = { padding: 0 };
  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{
        display: {
          xs: "none",
          sm: "block",
        },
      }}
    >
      <IconButton
        aria-label="cart"
        // sx={iconbuttonStyle}
        onClick={() => router.push("/home/cart")}
      >
        <ShoppingCartIcon style={{ color: "#ffff" }} />
      </IconButton>

      <IconButton
        aria-label="profile"
        // sx={iconbuttonStyle}
        onClick={() => router.push("/home/profile")}
      >
        <Avatar
          // sx={{}}
          alt="Remy Sharp"
          src="https://mui.com/static/images/avatar/1.jpg"
        />
      </IconButton>

      <IconButton
        // sx={iconbuttonStyle}
        aria-label="profile"
        onClick={() => alert(" logout app")}
      >
        <LogoutIcon style={{ color: "#ffff" }} />
      </IconButton>
    </Stack>
  );
};

const SearchBar = () => {
  return (
    <Search
      sx={{
        width: {
          xs: "60%",
          sm: "30%",
          md: "25%",
        },
        display: "flex",
        flexDirection: "row",
        height: {
          xs: "39%",
          sm: "45%",
          md: "50%",
        },
      }}
    >
      <IconButton
        aria-label="search"
        sx={{
          padding: "1%",
        }}
      >
        <SearchIcon
          sx={{
            width: {
              xs: "55%",
              sm: "65%",
              md: "75%",
            },
          }}
        />
      </IconButton>
      <InputBase
        fullWidth
        sx={{
          fontSize: {
            xs: "60%", // Extra small screens (e.g., mobile phones)
            sm: "70%", // Small screens (e.g., tablets)
            md: "80%", // Medium screens (e.g., laptops)
            lg: "90%",
          },
        }}
        placeholder="search products.."
      />
    </Search>
  );
};

const MenuButtonAndLoGo: React.FC<MenuButtonAndLoGoProps> = ({
  handelFunction,
}) => {
  return (
    <Box
      sx={{
        display: { xs: "block", sm: "none" },
      }}
    >
      <IconButton onClick={handelFunction}>
        <MenuIcon
          sx={{
            // display: { xs: "block", sm: "none" },
            width: {
              xs: "65%",
              md: "80%",
            },
          }}
        />
      </IconButton>
    </Box>
  );
};

const Header = () => {
  const [open, setOpen] = React.useState<
    "top" | "left" | "bottom" | "right" | null
  >(null);
  return (
    <AppBar
      position="static"
      sx={{
        position: "fixed",
        zIndex: "999",
        backgroundColor: "#416d6f",
        padding: {
          xs: "2% 2% 0% 2%",
          md: "1% 10% 0 10%",
        },
      }}
    >
      {/* <StyledToolbar> */}
      <Stack direction="row" justifyContent="space-between">
        <MenuButtonAndLoGo handelFunction={() => setOpen("left")} />

        <Drawar
          title="DAAA"
          position="left"
          open={open === "left"}
          onClose={() => setOpen(null)}
        >
          <Box>
            <Typography>Menu Buttons</Typography>
            <Divider />
            <Stack direction="column" alignItems="baseline">
              {[
                "Electronics",
                "Flights",
                "Home appliences",
                "grocery",
                "Books",
              ].map((item, i) => {
                return (
                  <Button
                    sx={{ textTransform: "none" }}
                    variant="text"
                    key={i * 0.25}
                  >
                    {item}
                  </Button>
                );
              })}
            </Stack>
          </Box>
        </Drawar>
        <Box>
          <Typography
            variant="h6"
            sx={{ ...typoHeading1, display: { xs: "none", sm: "block" } }}
          >
            DAAA
          </Typography>
        </Box>
        <SearchBar />
        <ButtonsList />
      </Stack>
      {/* </StyledToolbar> */}
    </AppBar>
  );
};

export default Header;
