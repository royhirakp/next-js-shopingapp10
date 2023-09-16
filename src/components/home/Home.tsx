"use client";
import { Box, Stack } from "@mui/material";
import React from "react";
import ButtonList from "./parts/ButtonList";
import Cousoul from "./parts/Cousoul";
import ProductCard from "./parts/ProductCard";
import { useRouter } from "next/navigation";
const productMochDtaa = [
  {
    id: 1,
    name: "Product name with details",
    reviewData: 5,
    detailes: "producr color",
    imageurl: "url",
  },
  {
    id: 2,
    name: "Product name with details",
    reviewData: 5,
    detailes: "producr color",
    imageurl: "url",
  },
  {
    id: 3,
    name: "Product name with details",
    reviewData: 5,
    detailes: "producr color",
    imageurl: "url",
  },
  {
    id: 4,
    name: "Product name with details",
    reviewData: 5,
    detailes: "producr color",
    imageurl: "url",
  },
  {
    id: 5,
    name: "Product name with details",
    reviewData: 5,
    detailes: "producr color",
    imageurl: "url",
  },
  {
    id: 6,
    name: "Product name with details",
    reviewData: 5,
    detailes: "producr color",
    imageurl: "url",
  },
  {
    id: 7,
    name: "Product name with details",
    reviewData: 5,
    detailes: "producr color",
    imageurl: "url",
  },
  {
    id: 8,
    name: "Product name with details",
    reviewData: 5,
    detailes: "producr color",
    imageurl: "url",
  },
  {
    id: 9,
    name: "Product name with details",
    reviewData: 5,
    detailes: "producr color",
    imageurl: "url",
  },
];
const Home = () => {
  const router = useRouter();
  return (
    <Box mt={1}>
      <Stack direction="column" spacing={0.5} justifyContent="space-between">
        <Box flex={4}>
          <Cousoul />
        </Box>
        <Box flex={20}>
          <Stack
            spacing={{ xs: 0.5, sm: 1 }}
            direction="row"
            useFlexGap
            flexWrap="wrap"
            justifyContent="space-between"
            sx={{
              paddingTop: { xs: "2%", sm: "0" },
              padding: {
                xs: "1%",
                lg: "0",
              },
            }}
          >
            {/* <ProductCard {...productMochDtaa[1]} /> */}
            {productMochDtaa.map((item, i) => {
              return (
                <ProductCard
                  detailes={item.detailes}
                  id={item.id}
                  imageUrl={item.imageurl}
                  name={item.name}
                  reviewData={item.reviewData}
                  key={i * 0.25}
                />
              );
            })}
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Home;
