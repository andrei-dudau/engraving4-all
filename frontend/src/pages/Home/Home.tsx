import React, { useEffect, useState } from "react";
import { Box, Typography, Link, Button } from "@mui/material";
import bannerImage from "./banner.png";      // hero banner image
import category1 from "./category1.png";     // left category image
import category2 from "./category2.png";     // right category image
import portfolio1 from "./portfolio1.png";
import portfolio2 from "./portfolio2.png";
import portfolio3 from "./portfolio3.png";
import brand1 from "./brand1.png";
import brand2 from "./brand2.png";
import brand3 from "./brand3.png";
import brand4 from "./brand4.png";
import brand5 from "./brand5.png";
import brand6 from "./brand6.png";

const Home: React.FC = () => {
  const [promoMessage, setPromoMessage] = useState(
    "Free shipping on orders over $75!"
  );

  // Default hero image comes from local file
  const [heroImageUrl, setHeroImageUrl] = useState<string>(bannerImage);

  // Dummy testimonials for now – later this can come from your DB/API
  const testimonials = [
    {
      name: "Alex M.",
      text: "The engraving quality was incredible and the tumblers arrived faster than expected. My team loved them!",
      occasion: "Corporate Gift Order",
    },
    {
      name: "Sarah L.",
      text: "Absolutely beautiful work. I ordered custom coasters as a housewarming gift and they were a huge hit.",
      occasion: "Housewarming Gift",
    },
    {
      name: "Daniel R.",
      text: "I’ve ordered from Engraving4All multiple times now. Every piece feels premium and thoughtfully crafted.",
      occasion: "Repeat Customer",
    },
    {
      name: "Emily K.",
      text: "The promotional drinkware for our event looked so professional. Our logo came out crisp and clean.",
      occasion: "Event Merch",
    },
    {
      name: "Jason P.",
      text: "Customer service was fantastic and they helped me finalize the design. Highly recommend!",
      occasion: "Custom Design Help",
    },
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const visibleCount = 3;
  const totalTestimonials = testimonials.length;

  const handleNext = () => {
    if (totalTestimonials <= visibleCount) return;
    setCurrentTestimonialIndex(
      (prev) => (prev + 1) % totalTestimonials
    );
  };

  const handlePrev = () => {
    if (totalTestimonials <= visibleCount) return;
    setCurrentTestimonialIndex(
      (prev) => (prev - 1 + totalTestimonials) % totalTestimonials
    );
  };

  const getVisibleTestimonials = () => {
    if (totalTestimonials <= visibleCount) return testimonials;
    const result = [];
    for (let i = 0; i < visibleCount; i++) {
      result.push(testimonials[(currentTestimonialIndex + i) % totalTestimonials]);
    }
    return result;
  };

  // Placeholder for DB-driven content later
  useEffect(() => {
    // Example of how you'd load from an API/DB in the future:
    //
    // const fetchHomepageContent = async () => {
    //   try {
    //     const res = await fetch("/api/homepage-config");
    //     if (!res.ok) return;
    //     const data = await res.json();
    //     if (data?.promoMessage) setPromoMessage(data.promoMessage);
    //     if (data?.heroImageUrl) setHeroImageUrl(data.heroImageUrl);
    //   } catch (err) {
    //     console.error("Error fetching homepage content:", err);
    //   }
    // };
    //
    // fetchHomepageContent();
  }, []);

  return (
    <Box sx={{ mt: { xs: 10, sm: 12.5 } }}>
      {/* Promo Banner */}
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#070E8B",
          color: "white",
          textAlign: "center",
          py: 1,
          px: 2,
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontWeight: 500,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          {promoMessage}
        </Typography>
      </Box>

      {/* Hero Image Banner */}
      <Box
        sx={{
          width: "100%",
          height: { xs: 260, sm: 360, md: 480 },
          backgroundImage: `url(${heroImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* SHOP BY OCCASION SECTION */}
      <Box
        sx={{
          width: "100%",
          py: 6,
          px: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
        }}
      >
        {/* Heading */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            textAlign: "center",
            color: "#070E8B",
          }}
        >
          SHOP BY OCCASION
        </Typography>

        {/* Category images row */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "center",
            gap: { xs: 4, sm: 6, md: 8 },
          }}
        >
          {/* Left image -> Shopify */}
          <Link
            href="https://www.shopify.com"
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
            sx={{ display: "inline-flex" }}
          >
            <Box
              component="img"
              src={category1}
              alt="Shop on Shopify"
              sx={{
                width: { xs: "85vw", sm: 850, md: 820 },
                height: "auto",
                borderRadius: 2,
                boxShadow: 3,
                cursor: "pointer",
                transition: "transform 0.2s ease",
                "&:hover": {
                  transform: "scale(1.03)",
                },
              }}
            />
          </Link>

          {/* Right image -> Etsy */}
          <Link
            href="https://www.etsy.com/shop/Engraving4All"
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
            sx={{ display: "inline-flex" }}
          >
            <Box
              component="img"
              src={category2}
              alt="Shop on Etsy"
              sx={{
                width: { xs: "85vw", sm: 850, md: 820 },
                height: "auto",
                borderRadius: 2,
                boxShadow: 3,
                cursor: "pointer",
                transition: "transform 0.2s ease",
                "&:hover": {
                  transform: "scale(1.03)",
                },
              }}
            />
          </Link>
        </Box>
      </Box>

      {/* HEAR FROM OUR CUSTOMERS – TESTIMONIALS SECTION */}
      <Box
        sx={{
          width: "100%",
          py: 6,
          px: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
          backgroundColor: "#F7F8FC",
        }}
      >
        {/* Heading */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            textAlign: "center",
            color: "#070E8B", // same blue as SHOP BY OCCASION and promo banner
          }}
        >
          HEAR FROM OUR CUSTOMERS
        </Typography>

        {/* Carousel Row */}
        <Box
          sx={{
            width: "100%",
            maxWidth: 1200,
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          {/* Left Arrow */}
          <Button
            onClick={handlePrev}
            variant="outlined"
            sx={{
              minWidth: 40,
              height: 40,
              borderRadius: "50%",
              borderColor: "#070E8B",
              color: "#070E8B",
              fontWeight: 700,
            }}
          >
            {"<"}
          </Button>

          {/* Visible Testimonials */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              gap: 3,
              flexWrap: "nowrap",
            }}
          >
            {getVisibleTestimonials().map((t, idx) => (
              <Box
                key={`${t.name}-${idx}`}
                sx={{
                  flex: "1 1 0",
                  maxWidth: { xs: "100%", sm: "33%" },
                  backgroundColor: "white",
                  borderRadius: 3,
                  boxShadow: 2,
                  p: 3,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: 200,
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ fontStyle: "italic", mb: 2 }}
                >
                  “{t.text}”
                </Typography>
                <Box>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: 700, mb: 0.5 }}
                  >
                    {t.name}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "text.secondary" }}
                  >
                    {t.occasion}
                  </Typography>

                  {/* 5-Star Rating */}
                  <Box
                    sx={{
                      mt: 1.5,
                      color: "#F6B400",
                      fontSize: "1rem",
                    }}
                  >
                    {"★★★★★"}
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>

          {/* Right Arrow */}
          <Button
            onClick={handleNext}
            variant="outlined"
            sx={{
              minWidth: 40,
              height: 40,
              borderRadius: "50%",
              borderColor: "#070E8B",
              color: "#070E8B",
              fontWeight: 700,
            }}
          >
            {">"}
          </Button>
        </Box>
      </Box>
      {/* PORTFOLIO SECTION */}
      <Box
        sx={{
          width: "100%",
          py: 6,
          px: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
        }}
      >
        {/* Heading */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            textAlign: "center",
            color: "#070E8B", // same blue as other section titles
          }}
        >
          PORTFOLIO
        </Typography>

        {/* Portfolio image row */}
        <Box
          sx={{
            width: "100%",
            maxWidth: 1200,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: 4, sm: 4, md: 5 },
          }}
        >
          {/* Portfolio item 1 */}
          <Link
            href="https://www.etsy.com/shop/Engraving4All"
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
            sx={{ display: "inline-flex" }}
          >
            <Box
              component="img"
              src={portfolio1}
              alt="Portfolio item 1"
              sx={{
                width: { xs: "85vw", sm: 320, md: 360 },
                height: "auto",
                borderRadius: 2,
                boxShadow: 3,
                cursor: "pointer",
                transition: "transform 0.2s ease",
                "&:hover": {
                  transform: "scale(1.03)",
                },
              }}
            />
          </Link>

          {/* Portfolio item 2 */}
          <Link
            href="https://www.etsy.com/shop/Engraving4All"
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
            sx={{ display: "inline-flex" }}
          >
            <Box
              component="img"
              src={portfolio2}
              alt="Portfolio item 2"
              sx={{
                width: { xs: "85vw", sm: 320, md: 360 },
                height: "auto",
                borderRadius: 2,
                boxShadow: 3,
                cursor: "pointer",
                transition: "transform 0.2s ease",
                "&:hover": {
                  transform: "scale(1.03)",
                },
              }}
            />
          </Link>

          {/* Portfolio item 3 */}
          <Link
            href="https://www.etsy.com/shop/Engraving4All"
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
            sx={{ display: "inline-flex" }}
          >
            <Box
              component="img"
              src={portfolio3}
              alt="Portfolio item 3"
              sx={{
                width: { xs: "85vw", sm: 320, md: 360 },
                height: "auto",
                borderRadius: 2,
                boxShadow: 3,
                cursor: "pointer",
                transition: "transform 0.2s ease",
                "&:hover": {
                  transform: "scale(1.03)",
                },
              }}
            />
          </Link>
        </Box>
      </Box>

      {/* TRUSTED BRANDS WE WORK WITH */}
      <Box
        sx={{
          width: "100%",
          py: 6,
          px: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
        }}
      >
        {/* Heading */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            textAlign: "center",
            color: "#070E8B", // same styling as all section headers
          }}
        >
          TRUSTED BRANDS WE WORK WITH
        </Typography>

        {/* Logo Grid */}
        <Box
          sx={{
            width: "100%",
            maxWidth: 1200,
            display: "flex",
            flexDirection: "column",
            gap: { xs: 4, sm: 6 },
          }}
        >
          {/* Row 1 */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: { xs: 4, sm: 8, md: 12 },  // more spacing
              flexWrap: "wrap",
            }}
          >
            {[brand1, brand2, brand3].map((logo, idx) => (
              <Box
                key={idx}
                component="img"
                src={logo}
                alt={`Brand logo ${idx + 1}`}
                sx={{
                  width: { xs: 140, sm: 200, md: 240 },  // ⬅️ MUCH BIGGER
                  height: "auto",
                  opacity: 0.95,
                  transition: "transform 0.2s ease, opacity 0.2s ease",
                  "&:hover": {
                    transform: "scale(1.08)",
                    opacity: 1,
                  },
                }}
              />
            ))}
          </Box>

          {/* Row 2 */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: { xs: 4, sm: 8, md: 12 },  // more spacing
              flexWrap: "wrap",
            }}
          >
            {[brand4, brand5, brand6].map((logo, idx) => (
              <Box
                key={idx}
                component="img"
                src={logo}
                alt={`Brand logo ${idx + 4}`}
                sx={{
                  width: { xs: 140, sm: 200, md: 240 },  // ⬅️ MUCH BIGGER
                  height: "auto",
                  opacity: 0.95,
                  transition: "transform 0.2s ease, opacity 0.2s ease",
                  "&:hover": {
                    transform: "scale(1.08)",
                    opacity: 1,
                  },
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>

      {/* Future sections can go below */}
      <Box sx={{ p: 3 }}></Box>
    </Box>
  );
};

export default Home;
