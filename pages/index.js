import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Product from "../components/Product";
import styles from "../styles/Home.module.css";
import data from "../utils/data";

export default function Home({ products }) {
  return (
    <Layout>
      <div>
        <h1>Products</h1>
        <Grid container spacing={3}>
          {products.map(
            ({ id, title, price, description, category, image }) => (
              <Grid item md={4} key={id}>
                <Product
                  id={id}
                  title={title}
                  price={price}
                  description={description}
                  category={category}
                  image={image}
                />
              </Grid>
            )
          )}
        </Grid>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: {
      products,
    },
  };
}
