import React, { useEffect, useState } from "react";
import { Container, Typography, CardMedia, Box } from "@mui/material";

type Testimonial = {
  id: number;
  logo: string;
  name: string;
  description: string;
};

const TestimonialTest: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/database/testimonials");
        if (!response.ok) {
          throw new Error("Failed to fetch testimonials");
        }
        const data = await response.json();
        setTestimonials(data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <div style={{width: "100%"}}>
      {/* Updated Header */}
      <Box
        sx={{
          height: "200px",
          marginBottom: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "transparent", // Transparent background
          userSelect: "none",
        }}
      >
        <Box
          sx={{
            width: "10%", // Increase the width of the line
            height: "5px",
            backgroundColor: "#7a7463", // Line color
            mx: "3%", // Adjust spacing around the line
          }}
        ></Box>
        <Typography
          variant="h1"
          sx={{
            fontSize: {
              xs: "2em", // Smaller font size for extra small screens
              sm: "3em", // Medium font size for small screens
              md: "4em", // Default size for medium and larger screens
            },
            fontWeight: "bold",
            color: "#7a7463", // Text color
            textAlign: "center", // Center the text
            whiteSpace: "nowrap", // Prevent text from wrapping
          }}
        >
          OUR CLIENTS, OUR SUCCESS
        </Typography>
        <Box
          sx={{
            width: "10%", // Increase the width of the line
            height: "5px",
            backgroundColor: "#7a7463", // Line color
            mx: "3%", // Adjust spacing around the line
          }}
        ></Box>
      </Box>

      {/* Testimonials Grid */}
      <div style={styles.gridContainer}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} style={styles.card}>
            <CardMedia
              component="img"
              alt={`${testimonial.name} logo`}
              height="150"
              image={testimonial.logo}
              style={styles.image}
            />
            <Typography variant="h6" style={styles.name}>
              {testimonial.name}
            </Typography>
            <Typography variant="body2" style={styles.description}>
              {testimonial.description}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties; } = {
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "2rem",
    margin: "2rem auto",
    width: "70%"
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    padding: "0",
    background: "none",
    borderRadius: "0",
    boxShadow: "none",
  },
  image: {
    borderRadius: "10px",
    objectFit: "cover",
    width: "150px",
    height: "150px",
    marginBottom: "1rem",
  },
  name: {
    fontWeight: "bold",
    marginBottom: "0.5rem",
    color: "#595449",
  },
  description: {
    color: "#555",
    fontSize: "0.9rem",
  },
};

export default TestimonialTest;