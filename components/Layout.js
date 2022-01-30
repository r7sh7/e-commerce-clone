import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import Head from "next/head";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>E-commerce-clone</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography>Amazon</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
    </div>
  );
};

export default Layout;
