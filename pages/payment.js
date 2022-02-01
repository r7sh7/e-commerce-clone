import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  List,
  ListItem,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckoutWizard from "../components/CheckoutWizard";
import Layout from "../components/Layout";
import { SAVE_PAYMENT_METHOD } from "../store/constants";
import {
  getLocalStorageData,
  setLocalStorageData,
} from "../utils/localStorage";
import { useStyles } from "../utils/styles";

const Payment = () => {
  const classes = useStyles();
  const router = useRouter();
  const dispatch = useDispatch();
  const [paymentMethod, setPaymentMethod] = useState("");
  const { shippingAddress } = useSelector((state) => state.cart.cart);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!paymentMethod) {
      alert("Payment Method Required");
    } else {
      dispatch({ type: SAVE_PAYMENT_METHOD, payload: paymentMethod });
      setLocalStorageData("paymentMethod", paymentMethod);
      router.push("/order-preview");
    }
  };

  useEffect(() => {
    if (!shippingAddress.address) {
      router.push("/shipping");
    } else {
      setPaymentMethod(getLocalStorageData("paymentMethod") || "");
    }
  }, []);
  return (
    <Layout title="payment">
      <CheckoutWizard activeStep={2} />
      <Container maxWidth="sm">
        <form onSubmit={submitHandler}>
          <Typography variant="h1" component="h1">
            Payment Method
          </Typography>
          <List>
            <ListItem>
              <FormControl component="fieldset">
                <RadioGroup
                  aria-label="Payment Method"
                  name="paymentMethod"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                >
                  <FormControlLabel
                    label="PayPal"
                    value="PayPal"
                    control={<Radio />}
                  ></FormControlLabel>
                  <FormControlLabel
                    label="Stripe"
                    value="Stripe"
                    control={<Radio />}
                  ></FormControlLabel>
                  <FormControlLabel
                    label="Cash"
                    value="Cash"
                    control={<Radio />}
                  ></FormControlLabel>
                </RadioGroup>
              </FormControl>
            </ListItem>
            <ListItem>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
              >
                Continue
              </Button>
            </ListItem>
            <ListItem>
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                onClick={() => router.push("/shipping")}
              >
                Back
              </Button>
            </ListItem>
          </List>
        </form>
      </Container>
    </Layout>
  );
};

export default Payment;
