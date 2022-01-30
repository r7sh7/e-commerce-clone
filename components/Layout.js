import { AppBar, Container, Link, Toolbar, Typography } from "@mui/material";
import Head from "next/head";
import NextLink from "next/link";
import React from "react";
import { useStyles } from "../utils/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>E-commerce-clone</title>
      </Head>
      <AppBar position="fixed" className={classes.navbar}>
        <Toolbar>
          <NextLink href="/" passHref>
            <Link style={{ textDecoration: "none" }}>
              <Typography className={classes.brand}>Amazon</Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <div>
            <NextLink href="/cart" passHref>
              <Link className={classes.headericons}>
                <ShoppingCartIcon />
              </Link>
            </NextLink>
            <NextLink href="/login" passHref>
              <Link className={classes.headericons}>
                <LogoutIcon />
              </Link>
            </NextLink>
          </div>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
    </div>
  );
};

export default Layout;
