import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/actions/cartActions";

const Product = ({ id, title, price, description, category, image }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const addItemToCart = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
    };
    dispatch(addToCart(product));
    router.push("/checkout");
  };
  return (
    <Card style={{ height: 500 }}>
      <CardActionArea style={{ height: 400 }}>
        <CardMedia
          component="img"
          image={image}
          title={title}
          style={{ objectFit: "contain", height: 300 }}
        ></CardMedia>
        <CardContent>
          <Typography>{title}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography>$ {price}</Typography>
        <Button size="small" color="primary" onClick={addItemToCart}>
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;
