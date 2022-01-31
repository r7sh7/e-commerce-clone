import {
  AppBar,
  Badge,
  Container,
  CssBaseline,
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
import { useSelector } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Layout = ({ children, title }) => {
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: "1.6rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
      h2: {
        fontSize: "1.4rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
      body1: {
        fontWeight: "normal",
      },
    },
    palette: {
      type: "light",
      primary: {
        main: "#f0c000",
      },
      secondary: {
        main: "#208080",
      },
    },
  });
  const classes = useStyles();
  const { data: session, status } = useSession();

  const { itemsCount } = useSelector((state) => state.cart.cart);
  return (
    <div>
      <Head>
        <title>{title ? `${title} - Amazon Clone` : "Amazon Clone"}</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
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
              <NextLink href="/cart" passHref>
                <Link className={classes.headerIcons}>
                  <Badge color="primary" badgeContent={itemsCount}>
                    <ShoppingCartIcon />
                  </Badge>
                </Link>
              </NextLink>
              {status === "authenticated" && (
                <NextLink href="/" passHref>
                  <Link className={classes.headerIcons} onClick={signOut}>
                    <LogoutIcon />
                  </Link>
                </NextLink>
              )}
            </div>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
      </ThemeProvider>
    </div>
  );
};

export default Layout;
