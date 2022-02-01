import { Box, Button, Container, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../components/Layout";

const OrderComplete = () => {
  const router = useRouter();
  return (
    <Layout title="order-complete">
      <Box textAlign="center">
        <Typography component="h1" variant="h1" textAlign="center">
          Your Order has been placed successfully!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => router.push("/")}
        >
          Continue Shopping
        </Button>
      </Box>
    </Layout>
  );
};

export default OrderComplete;
