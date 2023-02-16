import React, { useState } from "react";
import { useQuery } from "react-query";
//components
import Drawer from "@mui/material/Drawer";
import LinearProgress from "@mui/material/LinearProgress";
import Grid from "@mui/material/Grid";
import Badge from "@mui/material/Badge";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
//styles
import { Wrapper } from "./App.styles";
//types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};
//so in TS, we also create the type for the data we are fetching
//we also specify that the data is an array of CartItemType because we get an array of objects from the API
//FOR SOME REASON, we doN't have curly brackets...
const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch("https://fakestoreapi.com/products")).json();

const App = () => {
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );
  console.log(data);
  return <div>App</div>;
};

export default App;
