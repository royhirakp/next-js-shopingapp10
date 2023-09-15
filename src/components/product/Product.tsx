"use clinet";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import {
  NewTypography,
  NewButton,
} from "../../components/muielements/GlobalButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import RadioButtons from "./parts/RadioButton";
import Ratting from "../home/parts/Ratting";

const Product = () => {
  return (
    <Card
      sx={{
        maxWidth: "100%",
        height: "100%",
        margin: {
          xs: "0 1%",
          lg: "0",
        },
      }}
    >
      <Stack
        sx={{
          flexDirection: {
            xs: "column",
            sm: "row",
          },
        }}
      >
        <Box flex={1} p="2%">
          <ImageAndAddToCart />
        </Box>
        <Box flex={2.5}>
          <TextBox />
          <CardAction />
        </Box>
      </Stack>
    </Card>
  );
};

export default Product;

const ImageAndAddToCart = () => {
  return (
    <>
      <div>
        <CardMedia
          component="img"
          height="140"
          image="https://cdn2.thecatapi.com/images/bja.jpg"
          alt="green iguana"
          sx={{ marginBottom: "5%" }}
        />
      </div>
      <div>
        <Button
          sx={{
            "&.MuiButton-contained": {
              backgroundColor: "#ec4375",
            },
          }}
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
        >
          add to cart
        </Button>
      </div>
    </>
    // </Box>
  );
};

const TextBox = () => {
  return (
    <CardContent sx={{ padding: "0" }}>
      <Typography
        sx={{
          fontSize: {
            xs: "100%",
            sm: "120%",
            md: "150%",
          },
          padding: "0",
        }}
        variant="body2"
        color="text.secondary"
      >
        Product name
      </Typography>
      <Box sx={{ width: "47%", margin: "3% 0" }}>
        <Ratting count="5" rate={4.1} key="55" />
      </Box>
      <Typography
        sx={{
          fontSize: {
            xs: "80%",
            sm: "90%",
            md: "110%",
          },
          padding: "0",
          marginTop: "1%",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nisi
        doloribus officiis labore, qui nostrum cum eos quam! Dolorum ex incidunt
        velit, quod repellat ipsam modi dignissimos perspiciatis molestiae
        harum.
      </Typography>
      <Typography
        sx={{
          fontSize: {
            xs: "60%",
            sm: "85%",
            md: "90%",
          },
          padding: "0",
        }}
        variant="body2"
        color="text.secondary"
      >
        producr color
      </Typography>
    </CardContent>
  );
};

const CardAction = () => {
  return (
    <CardActions
      disableSpacing
      sx={{ display: "flex", justifyContent: "space-between", padding: 0 }}
    >
      <div>
        <IconButton aria-label="add to favorites" sx={{ padding: 0 }}>
          <FavoriteIcon sx={{ width: "100%" }} />
        </IconButton>
        <IconButton aria-label="share" sx={{ padding: 0 }}>
          <ShareIcon sx={{ width: "100%" }} />
        </IconButton>
      </div>
    </CardActions>
  );
};
