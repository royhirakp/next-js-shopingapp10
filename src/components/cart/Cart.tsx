import { Box, Card, Stack } from "@mui/material";
import React from "react";
import CartCard from "./parts/CartCard";
import PriceDetailes from "./parts/PriceDetailes";
import { CardContent, Divider, Typography } from "@mui/material";

const Cart = () => {
  return (
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

          display: {
            xs: "block",
            md: "none",
          },
          width: "100%",
        }}
      >
        <PriceDetailes width={"xs"} />
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
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard /> <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard /> <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard /> <CartCard /> <CartCard /> <CartCard /> <CartCard />
      </Box>
      <Box
        flex={2}
        sx={{
          // height: "300px",
          float: "right",
          // bgcolor: "green",
          display: {
            xs: "none",
            md: "block",
          },
        }}
      >
        <Box>
          <PriceDetailesLong width={"lg"} />
        </Box>
      </Box>
    </Stack>
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
  width: string;
}
const PriceDetailesLong: React.FC<MyComponentProps> = ({ width }) => {
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
          Price <span style={{ float: "right" }}>5000</span>{" "}
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
          Delivery Charges <span style={{ float: "right" }}>5000</span>
        </Typography>

        <Divider />
        <Typography variant="h4" sx={TypographyStyle}>
          Total Amount: <span style={{ float: "right" }}>5000</span>
        </Typography>
        <Divider />

        <Typography sx={TypographyStyle} color="green">
          You will save ₹6,601 on this order
        </Typography>
      </CardContent>
    </Card>
  );
};
