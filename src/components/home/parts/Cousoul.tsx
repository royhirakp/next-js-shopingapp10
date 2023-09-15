import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Box } from "@mui/material";
const Cousoul = () => {
  var items = [
    {
      id: 1,
      img: "/carsoules/Capture.PNG",
    },
    {
      id: 2,
      img: "/carsoules/Capturle.PNG",
    },
    {
      id: 3,
      img: "/carsoules/Captur24e.PNG",
    },
    {
      id: 4,
      img: "/carsoules/hCapture.PNG",
    },
  ];

  return (
    <Box
      sx={{
        display: {
          xs: "none",
          sm: "block",
        },
      }}
    >
      <Carousel>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </Box>
  );
};

export default Cousoul;

function Item(props: any) {
  return (
    <Paper
      sx={{
        width: "100%",

        height: {
          xs: "1rem",
          sm: "5rem",
          md: "9rem",
        },
      }}
    >
      <Box height="100%">
        <img src={props.item.img} alt=" cat" style={{ width: "100%" }} />
      </Box>
    </Paper>
  );
}
