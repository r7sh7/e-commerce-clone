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
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/actions/cartActions";
import { useStyles } from "../utils/styles";

const Product = ({ id, title, price, description, category, image }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const classes = useStyles();
  const { cartItems } = useSelector((state) => state.cart.cart);

  const addItemToCart = () => {
    const existItem = cartItems.find((item) => item.id === id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      quantity,
    };
    dispatch(addToCart(product));
    router.push("/cart");
  };
  return (
    <Card style={{ height: 450 }}>
      <CardActionArea style={{ height: 370 }}>
        <CardMedia
          component="img"
          image={image}
          title={title}
          style={{ objectFit: "contain", height: 300 }}
        ></CardMedia>
        <CardContent>
          <Typography className={classes.multiLineEllipsis}>{title}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography>$ {price} </Typography>
        <Button size="small" color="primary" onClick={addItemToCart}>
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;
