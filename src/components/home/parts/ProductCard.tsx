import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import Ratting from "./Ratting";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/cartSlices";

import { Button, Stack } from "@mui/material";
const ProductCard = () => {
  return (
    <Card
      sx={{
        marginBottom: "1%",
        borderRadius: "5%",
        padding: "0.8%",
        width: {
          xs: "45%",
          sm: "25%",
          md: "22%",
        },
      }}
    >
      <CardMedia
        component="img"
        height="2%"
        image="https://cdn2.thecatapi.com/images/bja.jpg"
        alt="Paella dish"
        // width="5%"
        sx={{ borderRadius: "5%" }}
      />
      <TextBox />

      <Ratting rate={4.5} count={"12"} />
      <CardAction />
      <ButtonContainer />
    </Card>
  );
};

export default ProductCard;

const TextBox = () => {
  return (
    <CardContent sx={{ padding: "0" }}>
      <Typography
        sx={{
          fontSize: {
            xs: "65%",
            sm: "90%",
            md: "95%",
          },
          padding: "0",
        }}
        variant="body2"
        color="text.secondary"
      >
        Product name with details
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
          <FavoriteIcon sx={{ width: "58%" }} />
        </IconButton>
        <IconButton aria-label="share" sx={{ padding: 0 }}>
          <ShareIcon sx={{ width: "58%" }} />
        </IconButton>
      </div>
    </CardActions>
  );
};

const ButtonContainer = () => {
  const dispatch = useDispatch();
  return (
    <Stack justifyContent="center">
      <Button
        onClick={() => {
          // console.log("workinggg......... add cart");
          dispatch(
            addToCart({
              id: 1,
              name: "string",
              price: 500,
              stocks: 21,
              rattings: 5,
              image: "string",
              info: "string",
              numOfReview: "55",
            })
          );
        }}
        variant="contained"
        sx={{
          textTransform: "none",
          fontSize: {
            xs: "45%",
            sm: "50%",
            md: "80%",
          },
          "&.MuiButton-root": {
            backgroundColor: "#d62a15",
            // width: "10px",
          },
        }}
      >
        <span>Add to Cart</span>
      </Button>
    </Stack>
  );
};
