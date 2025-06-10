import {
  Typography,
  Box,
  Button,
  Container,
  Card,
  CardMedia,
  CardContent,
  Link
} from "@mui/material";
import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import image9 from '../Shop/Images/picture.png';
import image13 from '../Shop/Images/emsthemed40.png';
import image31 from '../Shop/Images/gohome.webp';
import background from './background.jpg';
import fabricBackground from './fabric.png';

type Image = {
  id: number;
  url: string;
  title: string;
};

type Testimonial = {
  id: number;
  logo: string;
  name: string;
  description: string;
};

type Product = {
  id: number;
  name: string;
  link: string;
  price: string;
};

const Home: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState<number>(0);
  const [fadeIn, setFadeIn] = useState<boolean>(true);
  const [showPieces, setShowPieces] = useState<Product[]>([]);


  const showpiece = [image9, image13, image31];

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/database/images");
        if (!response.ok) {
          throw new Error("Failed to fetch images");
        }
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    const fetchTestimonials = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/database/testimonials");
        if (!response.ok) {
          throw new Error("Failed to fetch testimonials");
        }
        const data = await response.json();
        setTestimonials(data);
        setCurrentTestimonialIndex(Math.floor(Math.random() * Math.min(3, data.length)));
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/database/showpieces");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setShowPieces(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchImages();
    fetchTestimonials();
    fetchProducts();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentTestimonialIndex((prevIndex) =>
          (prevIndex + 1) % Math.min(3, testimonials.length)
        );
        setFadeIn(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials]);

  return (
    <>
      {/* Main section */}
      <Box
        sx={{
          position: 'relative',
          width: '100vw',
          height: '900px',
          margin: '0',
          padding: '0',
          overflow: 'hidden',
          left: '0',
        }}
      >
        <img
          src={require('./background.jpg')}
          alt="Engraving Visual"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100%',
            objectFit: 'cover',
            margin: 0,
            padding: 0,
          }}
        />

        <Box
          sx={{
            position: 'absolute',
            top: { xs: 80, sm: 120, md: 162 },
            left: { xs: 16, sm: 32, md: 142 },
            color: 'white',
            textAlign: 'left',
            maxWidth: { xs: '90%', sm: '60%', md: '26%' },
            fontSize: { xs: '1rem', sm: '1.2rem', md: '1.6rem' },
            padding: { xs: 2, sm: 3, md: 4 },
            backgroundColor: 'rgba(0, 0, 0, 0.65)',
            borderRadius: 5,
          }}
        >
          <h1 style={{ margin: 0 }}>Welcome to the world of precision services at its finest!</h1>
          <p style={{ margin: 0 }}>We offer a wide range of personalized products—fast and reliable.</p>
          <h1 style={{ margin: 0 }}>Laser Engraving</h1>
          <h1 style={{ margin: 0 }}>3D Printing</h1>
          <h1 style={{ margin: 0 }}>Color UV Printing</h1>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            <Button
              variant="outlined"
              href="https://www.etsy.com/shop/Engraving4All"
              target="_blank"
              sx={{
                px: 5,
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 'bold',
                borderColor: 'white',
                color: 'white',
                borderRadius: '50px',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderColor: 'white',
                },
              }}
            >
              Visit our Etsy Store
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
  sx={{
    position: "absolute",
    top: "900px", // starts below the hero section
    left: 0,
    width: "100vw",
    minHeight: "250vh",
    overflow: "hidden",
    zIndex: -1,
  }}
>
<Box
  component="img"
  src={require("./back.png")}
  alt="Background Texture"
  sx={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    transformOrigin: "center",
    opacity: 0.24,
    objectFit: "fill", // stretch to fill the container
    display: "block",
  }}
/>
</Box>

      {/* Samples */}
      <Box sx={{ marginTop: 8, marginBottom: 8 }}>
        <Typography
          variant="h5"
          sx={{
            color: '#9c6d28',
            marginBottom: 5,
            fontFamily: '"DM Serif Text", serif',
            fontWeight: 400,
            fontStyle: "normal",
            textAlign: "center",
            fontSize: "2.5rem",
          }}
        >
          Our Expertise
        </Typography>
          <Grid container direction="column" spacing={6} alignItems="center">
            {images.slice(0, 3).map((image, index) => (
              <Grid
                item
                key={image.id}
                sx={{
                  display: "flex",
                  flexDirection: {
                    xs: "column", // mobile = stacked
                    sm: index % 2 === 0 ? "row" : "row-reverse", // tablet/desktop = alternating
                  },
                  alignItems: "center",
                  justifyContent: "center",
                  ml: index % 2 === 0 ? { xs: 0, sm: 0, md: 0 } : { xs: 0, sm: 0, md: 0},
                  mr: index % 2 === 0 ? { xs: 0, sm: 0, md: 0 } : { xs: 0, sm: 0, md: 0 },
                  px: { xs: 2, sm: 4 },
                  flexWrap: "wrap",
                }}
              >
                <Box
                  component="img"
                  src={image.url}
                  alt={image.title}
                  sx={{
                    width: { xs: "100%", sm: "520px" },
                    height: "400px",
                    objectFit: "cover",
                    mb: { xs: 2, sm: 0 },
                  }}
                />
                <Box
                  sx={{
                    textAlign: "center",
                    maxWidth: { xs: "100%", sm: "600px" },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    mt: { xs: 2, sm: 0 },
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      maxWidth: "500px", // constrain width of the text box
                      pl: {
                        xs: 0,
                        sm: index % 2 === 0 ? 10 : 0,
                      },
                      pr: {
                        xs: 0,
                        sm: index % 2 !== 0 ? 10 : 0,
                      },
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: '"DM Serif Text", serif',
                        color: "#9c6d28",
                        fontSize: "2.2rem",
                        mb: 1,
                      }}
                    >
                      {image.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#5c5c5c",
                        fontSize: "0.95rem",
                        lineHeight: 1.5,
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet luctus nulla.
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
      </Box>

            {/* Testimonials */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 8 }}>
        <Box>
          <Typography
            variant="h5"
            sx={{
              marginBottom: 2,
              color: '#9c6d28',
              fontWeight: 500,
              fontStyle: "normal",
              textAlign: "center",
              fontFamily: '"DM Serif Text", serif',
            }}
          >
            Ratings
          </Typography>
        </Box>

        <Box>
          {testimonials.length > 0 && (
            <Card
              onClick={() => (window.location.href = "/testimonials")}
              sx={{
                display: "flex",
                flexDirection: "column",
                boxShadow: 3,
                borderRadius: 3,
                backgroundColor: "#f5f5f5",
                cursor: "pointer",
                textAlign: "center",
                maxWidth: 1040,
                paddingX: 4,
                paddingY: 2,
              }}
            >
              <CardContent>
                <Typography
                  sx={{
                    transition: "opacity 0.5s ease-in-out",
                    color: "#4a3b3a",
                    opacity: fadeIn ? 1 : 0,
                    fontSize: '1.2rem', // made larger
                    marginTop: 1,
                    marginBottom: 1,
                    fontWeight: 500,
                  }}
                >
                  "{testimonials[currentTestimonialIndex].description}"
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    fontStyle: "italic",
                    transition: "opacity 0.5s ease-in-out",
                    opacity: fadeIn ? 1 : 0,
                    fontSize: '1rem', // made larger
                  }}
                >
                  - {testimonials[currentTestimonialIndex].name}
                </Typography>
              </CardContent>
            </Card>
          )}
        </Box>
      </Box>

      <Box sx={{ marginTop: 8, marginBottom: 8 }}>
        <Typography
          variant="h5"
          sx={{
            color: '#4a3b3a',
            marginBottom: 2,
            fontFamily: '"DM Serif Text", serif',
            fontWeight: 400,
            fontStyle: "normal",
            textAlign: "center",
          }}
        >
          Our Products
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {showPieces.slice(0, 3).map((sp, i) => (
            <Grid item key={sp.id}>
              <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
                <Link key={"link" + sp.id + 1000} href={sp.link} underline="none" color="inherit">
                  <CardMedia
                    component="img"
                    height="200"
                    image={showpiece[i]}
                    alt={sp.name.replaceAll("\\", "")}
                    sx={{ objectPosition: "50% 30%" }}
                  />
                  <CardContent>
                    <Typography variant="body1" sx={{ color: "black" }}>{sp.name.replaceAll("\\", "")}</Typography>
                  </CardContent>
                </Link>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Home;
