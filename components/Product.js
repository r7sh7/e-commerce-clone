import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const Product = ({ id, title, price, description, category, image }) => {
  return (
    <Card style={{ height: 500 }}>
      <CardActionArea>
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
        <Button size="small" color="primary">
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;
