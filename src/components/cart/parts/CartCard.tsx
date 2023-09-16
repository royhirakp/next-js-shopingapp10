import * as React from "react";
import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, IconButton, Paper, Stack } from "@mui/material";
const buttonStyle = {
  textTransform: "none",
  fontSize: {
    xs: "45%",
    sm: "50%",
    md: "80%",
  },
  "&.MuiButton-root": {
    // backgroundColor: "#d62a15",
    // width: "10px",
  },
  marginLeft: "5%",
};

interface propsData {
  item: any;
}
const CartCard: React.FC<propsData> = ({ item }) => {
  return (
    <Card
      sx={{
        maxWidth: "100%",
        display: "flex",
        margin: "0 1% 1% 1%",
        padding: "0.5%",
        boxSizing: "border-box",
        flexDirection: "column",
      }}
    >
      <Stack direction="row">
        <ImageBox />
        <TextBox />
      </Stack>
      <ButtonBox />
    </Card>
  );
};

export default CartCard;

const ImageBox = () => {
  return (
    <Box
      flex={1}
      sx={{
        display: {
          xs: "none",
          sm: "none",
          md: "block",
        },
      }}
    >
      <CardMedia
        sx={{ height: "100%" }}
        component="img"
        alt="green iguana"
        height="100%"
        image="https://cdn2.thecatapi.com/images/bja.jpg"
      />
    </Box>
  );
};

const TextBox = () => {
  return (
    <Box flex={5} pl="1%">
      <Typography
        gutterBottom
        variant="h6"
        sx={{
          fontSize: {
            xs: "65%",
            sm: "90%",
            md: "95%",
          },
          padding: "0",
        }}
        component="div"
      >
        Lizard
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
        Black
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
        Seller:SVPeripherals
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
        Price: <b> &#x20B9; 2505/-</b>
      </Typography>
    </Box>
  );
};
import MinimizeIcon from "@mui/icons-material/Minimize";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
const ButtonBox = () => {
  return (
    <Box flex={1} p="0.5%">
      <IconButton
        aria-label="delete"
        sx={{ padding: "0", backgroundColor: "antiquewhite" }}
      >
        <RemoveIcon sx={{ width: { xs: "32%", sm: "55%", md: "75%" } }} />
      </IconButton>
      <Typography
        sx={{
          padding: "0 2%",
          display: "inline-block",
          fontSize: {
            xs: "60%",
            sm: "85%",
            md: "90%",
          },
        }}
      >
        5
      </Typography>
      <IconButton
        aria-label="delete"
        size="large"
        sx={{ padding: "0", backgroundColor: "antiquewhite" }}
      >
        <AddIcon sx={{ width: { xs: "32%", sm: "55%", md: "75%" } }} />
      </IconButton>

      <Button sx={buttonStyle} size="small">
        Remove
      </Button>
    </Box>
  );
};
