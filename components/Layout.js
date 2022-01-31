import {
  AppBar,
  Badge,
  Container,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import Head from "next/head";
import NextLink from "next/link";
import React from "react";
import { useStyles } from "../utils/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  const classes = useStyles();
  const { data: session, status } = useSession();
  const router = useRouter();

  const { items } = useSelector((state) => state.cart);

  return (
    <div>
      <Head>
        <title>E-commerce-clone</title>
      </Head>
      <AppBar position="sticky" className={classes.navbar}>
        <Toolbar>
          <NextLink href="/" passHref>
            <Link style={{ textDecoration: "none" }}>
              <Typography className={classes.brand}>Amazon</Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <div style={{ display: "flex", alignItems: "center" }}>
            {status === "authenticated" ? (
              <Typography className={classes.headerIcons}>
                Hello, {session.user.name}
              </Typography>
            ) : (
              <Link onClick={signIn} className={classes.headerIcons}>
                <Typography>Hello, Sign In</Typography>
              </Link>
            )}
            <NextLink href="/checkout" passHref>
              <Link className={classes.headerIcons}>
                <Badge color="warning" badgeContent={items.length}>
                  <ShoppingCartIcon />
                </Badge>
              </Link>
            </NextLink>
            {
              status === "authenticated" && (
                // {/* <NextLink href="/login" passHref> */}
                <Link className={classes.headerIcons} onClick={signOut}>
                  <LogoutIcon />
                </Link>
              )
              // {/* </NextLink> */}
            }
          </div>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
    </div>
  );
};

export default Layout;
