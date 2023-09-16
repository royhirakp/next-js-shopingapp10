import {
  Button,
  Card,
  CardContent,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { checkOutCart } from "@/redux/slices/cartSlices";
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
const PriceDetailes: React.FC<MyComponentProps> = ({ totalPrice }) => {
  const dispatch = useDispatch();

  return (
    <Card
      sx={{
        width: {
          xs: "92%",
          md: "100%",
        },
        // position: "fixed",
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
          Delivery Charges <span style={{ float: "right" }}>000</span>
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
            }}
          >
            Order
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default PriceDetailes;
