import {
  Button,
  Container,
  Link,
  List,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import Layout from "../components/Layout";
import NextLink from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { Controller, useForm } from "react-hook-form";

const Login = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const { data: session, status } = useSession();
  const router = useRouter();
  const { redirect } = router.query;
  if (status === "authenticated") {
    addUserData();
    router.push(redirect || "/");
  }
  async function addUserData() {
    await setDoc(
      doc(db, "users", session?.user.email),
      {
        name: session.user.name,
      },
      { merge: true }
    );
  }

  const handleLogin = ({ email, password }) => {};
  return (
    <Layout>
      <Container maxWidth="sm">
        <form onSubmit={handleSubmit(handleLogin)}>
          <Typography variant="h1" component="h1">
            Login
          </Typography>
          <List>
            <ListItem>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                }}
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="email"
                    label="Email"
                    inputProps={{ type: "email" }}
                    errors={Boolean(errors.email)}
                    helperText={
                      errors.email
                        ? errors.email.type === "pattern"
                          ? "Email is not valid!"
                          : "Email is required!"
                        : ""
                    }
                    {...field}
                  ></TextField>
                )}
              ></Controller>
            </ListItem>
            <ListItem>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  minLength: 6,
                }}
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="password"
                    label="Password"
                    inputProps={{ type: "password" }}
                    errors={Boolean(errors.password)}
                    helperText={
                      errors.password
                        ? errors.password.type === "minLength"
                          ? "Password should be atleast 5 characters long!"
                          : "Password is required!"
                        : ""
                    }
                    {...field}
                  ></TextField>
                )}
              ></Controller>
            </ListItem>
          </List>
          <ListItem>
            <Button color="primary" variant="contained" fullWidth type="submit">
              Login
            </Button>
          </ListItem>
        </form>
        <List>
          <ListItem>
            <Typography
              style={{
                margin: "0 auto",
                fontSize: "1.2rem",
              }}
            >
              OR
            </Typography>
          </ListItem>
          <ListItem>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              onClick={signIn}
            >
              Sign in with Google
            </Button>
          </ListItem>
          <ListItem>
            Dont have an account?&nbsp;
            <NextLink href={`/register?redirect=${redirect || "/"}`} passHref>
              <Link>Register</Link>
            </NextLink>
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};

export default Login;
