import React, { useEffect, useState } from "react";
import { Box, Typography, Link } from "@mui/material";

const API_URL = process.env.REACT_APP_WC_API_URL ?? "";
const CONSUMER_KEY = process.env.REACT_APP_WC_CONSUMER_KEY ?? "";
const CONSUMER_SECRET = process.env.REACT_APP_WC_CONSUMER_SECRET ?? "";

type Product = {
  id: number;
  name: string;
  permalink: string;
  price: string;
  images: { src: string }[];
};

function Shop() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `${API_URL}?consumer_key=${CONSUMER_KEY}&consumer_secret=${CONSUMER_SECRET}`
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch products: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      {/* Top Header */}
      <Box
        sx={{
          height: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "-80px",
        }}
      >
        <Box sx={{ width: "25%", height: "5px", backgroundColor: "#7a7463", mx: "5%" }}></Box>
        <Typography variant="h1" sx={{ fontSize: "4em", fontWeight: "bold", color: "#7a7463" }}>
          SHOP
        </Typography>
        <Box sx={{ width: "25%", height: "5px", backgroundColor: "#7a7463", mx: "5%" }}></Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "40px",
          px: 4,
          py: 6,
        }}
      >
        {products.map((product) => (
          <Box
            key={product.id}
            sx={{
              width: "250px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              overflow: "hidden",
              textAlign: "center",
              boxShadow: 3,
              bgcolor: "#fff",
            }}
          >
            <Link href={product.permalink} underline="none" color="inherit">
              <Box sx={{ height: "250px", overflow: "hidden" }}>
                <img
                  src={product.images[0]?.src}
                  alt={product.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
              <Box sx={{ p: 2 }}>
                <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
                  {product.name}
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  ${product.price}
                </Typography>
              </Box>
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Shop;