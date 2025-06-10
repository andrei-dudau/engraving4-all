import React, { useEffect, useState } from "react";
import { Box, Typography, Link } from "@mui/material";
import image1 from './Images/stanley20.png';
import image2 from './Images/stanley40.png';
import image3 from './Images/stanley30.png';
import image4 from './Images/yeti30.png';
import image5 from './Images/yeti14.png';
import image6 from './Images/tennis.png';
import image7 from './Images/twoTumbler.png';
import image8 from './Images/watch.png';
import image9 from './Images/picture.png';
import image10 from './Images/mug14.png';
import image11 from './Images/3dtray.png';
import image12 from './Images/peachpic.png';
import image13 from './Images/emsthemed40.png';
import image14 from './Images/tag1.png';
import image15 from './Images/handle.png';
import image16 from './Images/ems40.png';
import image17 from './Images/father30.png';
import image18 from './Images/coaster.png';
import image19 from './Images/glass.png';
import image20 from './Images/spoiledwife.png';
import image21 from './Images/kiddog.png';
import image22 from './Images/halloweencoaster.webp';
import image23 from './Images/father40.avif';
import image24 from './Images/father14.jpg';
import image25 from './Images/yetipic30.webp';
import image26 from './Images/halloweenhandle.jpg';
import image27 from './Images/fatherboard.webp';
import image28 from './Images/jewelry.webp';
import image29 from './Images/plastic.webp';
import image30 from './Images/valentine.webp';
import image31 from './Images/gohome.webp';
import image32 from './Images/fathermedium.webp';
import image33 from './Images/personalcuttingboard.webp';
import image34 from './Images/interactivecheese.webp';
import image35 from './Images/wethepeople.webp';
import image36 from './Images/dog.webp';
import image37 from './Images/butterfly.webp';
import image38 from './Images/tiger.webp';
import image39 from './Images/pickleball.webp';
import image40 from './Images/rose.webp';
import image41 from './Images/ny.webp';
import image42 from './Images/kids.webp';
import image43 from './Images/tigerportrait.webp';
import image44 from './Images/fatherbamboo.webp';
import image45 from './Images/flag20.webp';
import image46 from './Images/flower.webp';
import image47 from './Images/buisness.webp';
import image48 from './Images/mini.webp';
import image49 from './Images/firstresponder.webp';
import image50 from './Images/pen.webp';
import "./Shop.css";



type Product = {
  id: number;
  name: string;
  link: string;
  price: string;
};


function Shop() {
  const imagearr = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10,
    image11, image12, image13, image14, image15, image16, image17, image18, image19, image20,
    image21, image22, image23, image24, image25, image26, image27, image28, image29, image30,
    image31, image32, image33, image34, image35, image36, image37, image38, image39, image40,
    image41, image42, image43, image44, image45, image46, image47, image48, image49, image50
  ];

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/database/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
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
          backgroundColor: "transparent",
          userSelect: "none",
          // paddingTop: "20px", 
          marginBottom: "-80px",
        }}
      >
        <Box
          sx={{
            width: "25%",
            height: "5px",
            backgroundColor: "#7a7463", // Change the color of the lines (optional)
            mx: "5%",
          }}
        ></Box>
        <Typography
          variant="h1"
          sx={{
            fontSize: "4em",
            fontWeight: "bold",
            color: "#7a7463", // Change text color (optional)
          }}
        >
          SHOP
        </Typography>
        <Box
          sx={{
            width: "25%",
            height: "5px",
            backgroundColor: "#7a7463", // Change the color of the lines (optional)
            mx: "5%",
          }}
        ></Box>
      </Box>


      <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "nowrap", mx: "3%" }}>
        {/* inventory section */}
        <Box
          sx={{
            width: "70%",
            margin: "auto",
            paddingY: "100px",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignContent: "flex-start",
            gap: "50px 4%"
          }}
        >
          {products.map((item, i) => (
            <Box key={"contanier" + item.id} className="item-card" sx={{ width: "22%", height: "600px", fontSize: "1.3em", boxSizing: "border-box", padding: "10px", borderRadius: "10px", borderWidth: "0 4px 4px 0", borderColor: "white", borderStyle: "solid", color: "black" }}>
              <Link key={"link" + item.id} href={item.link} underline="none" color="inherit">
                <Box key={"image" + item.id} sx={{ width: "100%", height: "300px", marginBottom: "0" }} className="flip-card">
                  <img src={imagearr[i]} alt={item.name.replaceAll("\\", "")} style={{ width: "100%", height: "300px", objectFit: "scale-down", objectPosition: "50% 40%" }} />
                </Box>
                <Box key={"name" + item.id} sx={{ padding: "20px 10px", fontWeight: "bold", textDecoration: "underline", color: "black" }}>
                  {item.name.replaceAll("\\", "")}
                </Box>
                <Box key={"price" + item.id} sx={{ padding: "0px 10px", margin: "0", fontWeight: "bold", color: "black" }}>
                  $ {item.price.substring(1)}
                </Box>
              </Link>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Shop;
