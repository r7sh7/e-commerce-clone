import { Box, Grid, Pagination } from "@mui/material";
import { useState } from "react";
import Layout from "../components/Layout";
import Product from "../components/Product";
import { useStyles } from "../utils/styles";

export default function Home({ products }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  const classes = useStyles();
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
  const pageNumbers = Math.ceil(products.length / itemsPerPage);
  const handleChange = (event, value) => {
    setCurrentPage(value);
  };
  return (
    <Layout>
      <div>
        <h1>Products</h1>
        <Grid container spacing={3}>
          {currentItems.map(
            ({ id, title, price, description, category, image }) => (
              <Grid item xs={12} md={6} lg={4} key={id}>
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
      <Box className={classes.footer}>
        <Pagination
          size="large"
          count={pageNumbers}
          page={currentPage}
          onChange={handleChange}
        />
      </Box>
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
