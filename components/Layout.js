import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import Head from "next/head";
import React from "react";
import { useStyles } from "../utils/styles";

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>E-commerce-clone</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography>Amazon</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
    </div>
  );
};

export default Layout;
