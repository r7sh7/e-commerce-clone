import {
  Button,
  Card,
  Grid,
  Link,
  List,
  ListItem,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/Layout";
import NextLink from "next/link";
import Image from "next/image";
import { addToCart, removeFromCart } from "../store/actions/cartActions";
import { useRouter } from "next/router";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const router = useRouter();

  const updateCartHandler = (item, quantity) => {
    const product = { ...item, quantity };
    dispatch(addToCart(product));
  };

  const removeItemHandler = (item) => {
    dispatch(removeFromCart(item));
  };

  const checkoutHandler = () => {
    router.push("/shipping");
  };
  return (
    <Layout title="cart">
      <Typography variant="h1" component="h1">
        Shopping Cart
      </Typography>
      {cartItems.length === 0 ? (
        <div>
          Cart is empty.{" "}
          <NextLink href="/" passHref>
            <Link>Continue shopping</Link>
          </NextLink>
        </div>
      ) : (
        <Grid container spacing={1}>
          <Grid item md={9} xs={12}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Image</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cartItems.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={50}
                          height={50}
                        ></Image>
                      </TableCell>
                      <TableCell>
                        <Typography color="primary">{item.title}</Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Select
                          value={item.quantity}
                          onChange={(e) =>
                            updateCartHandler(item, e.target.value)
                          }
                        >
                          {[...Array(10).keys()].map((x) => (
                            <MenuItem key={x + 1} value={x + 1}>
                              {x + 1}
                            </MenuItem>
                          ))}
                        </Select>
                      </TableCell>
                      <TableCell align="right">${item.price}</TableCell>
                      <TableCell align="right">
                        <Button
                          variant="contained"
                          color="secondary"
                          onClick={() => removeItemHandler(item)}
                        >
                          Remove
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item md={3} xs={12}>
            <Card>
              <List>
                <ListItem>
                  <Typography variant="h2">
                    Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}{" "}
                    items) : $
                    {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={checkoutHandler}
                  >
                    Proceed to check Out
                  </Button>
                </ListItem>
              </List>
            </Card>
          </Grid>
        </Grid>
      )}
    </Layout>
  );
};

export default Cart;
