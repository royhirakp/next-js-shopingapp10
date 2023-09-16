"use clinet";
import { Box, Button, Card, Stack } from "@mui/material";
import React from "react";
import CartCard from "./parts/CartCard";
import PriceDetailes from "./parts/PriceDetailes";
import { CardContent, Divider, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { checkOutCart } from "@/redux/slices/cartSlices";
const Cart = () => {
  const data = useSelector((s: any) => s.cart);
  const { cartItems = [], totalPrice } = data;
  // console.log("form cart component===", cartItems, totalPrice);
  return (
    <>
      {totalPrice == 0 ? (
        <>
          <h1 style={{ textAlign: "center", padding: "5%" }}>Empty cart</h1>
        </>
      ) : (
        <Stack
          sx={{
            paddingTop: {
              xs: "9px",
              sm: "0px",
            },
            margin: {
              xs: "0 1%",
              sm: "0px 1%",
            },
            flexDirection: {
              xs: "column",
              md: "row",
            },
          }}
        >
          <Stack
            sx={{
              position: "fixed",
              zIndex: "999",
              backgroundColor: "azure",
              display: {
                xs: "flex",
                md: "none",
              },
              height: {
                xs: "189",
                sm: "216px",
                md: "",
              },
              top: {
                xs: "51px",
                sm: "73px",
              },
              width: "100%",
            }}
          >
            <PriceDetailes totalPrice={totalPrice} />
          </Stack>
          <Box
            flex={3}
            sx={{
              height: "auto",
              marginTop: {
                xs: "180px",
                sm: "202px",
                md: "0px",
              },
            }}
          >
            {cartItems.map((item: any, i: any) => {
              return <CartCard item={{ item }} key={i * 0.05} />;
            })}
          </Box>
          <Box
            flex={2}
            sx={{
              float: "right",
              display: {
                xs: "none",
                md: "block",
              },
            }}
          >
            <Box>
              <PriceDetailesLong totalPrice={totalPrice} />
            </Box>
          </Box>
        </Stack>
      )}
    </>
  );
};

export default Cart;

const TypographyStyle = {
  fontSize: {
    xs: "65%",
    sm: "90%",
    md: "95%",
  },
};

interface MyComponentProps {
  totalPrice: string;
}
const PriceDetailesLong: React.FC<MyComponentProps> = ({ totalPrice }) => {
  const dispatch = useDispatch();
  return (
    <Card
      sx={{
        width: {
          xs: "92%",
          md: "39%",
          lg: "32%",
          xl: "29%",
        },
        position: "fixed",
        // marginRight: "1%",
        margin: {
          xs: "auto",
          md: "0 1% 0 0",
        },
      }}
    >
      <CardContent>
        <Typography
          sx={TypographyStyle}
          color="text.secondary"
          gutterBottom
          variant="h5"
        >
          PRICE DETAILS
        </Typography>
        <Divider />
        <Typography sx={TypographyStyle} component="div">
          Price <span style={{ float: "right" }}>{totalPrice}</span>{" "}
        </Typography>
        <Typography
          sx={{
            mb: 1.5,
            ...TypographyStyle,
          }}
          color="text.secondary"
        >
          Discount <span style={{ float: "right" }}>000</span>
        </Typography>
        <Typography
          sx={{
            mb: 1.5,
            ...TypographyStyle,
          }}
          color="text.secondary"
        >
          Delivery Charges <span style={{ float: "right" }}>0000</span>
        </Typography>

        <Divider />
        <Typography variant="h4" sx={TypographyStyle}>
          Total Amount: <span style={{ float: "right" }}>{totalPrice}</span>
        </Typography>
        <Divider />

        <Typography sx={TypographyStyle} color="green">
          You will save ₹6,601 on this order
        </Typography>
        <Stack justifyContent="center" alignItems="center">
          <Button
            sx={{
              "&.MuiButton-contained": {
                backgroundColor: "blue",
              },
              maxWidth: "274px",
              textTransform: "none",
              fontSize: {
                xs: "45%",
                sm: "50%",
                md: "80%",
              },
            }}
            type="submit"
            color="primary"
            variant="contained"
            fullWidth
            onClick={() => {
              dispatch(checkOutCart());
              alert("redux data deleted");
            }}
          >
            Order
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};
