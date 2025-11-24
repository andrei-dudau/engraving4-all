import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import "../style.css";
import logo from "../logo.png";

const navItems = [
  { text: "Drinkware", to: "/drinkware" },
  { text: "Coasters", to: "/coasters" },
  { text: "Gift Sets", to: "/gift-sets" },
  { text: "Promotional", to: "/promotional" },
  { text: "Contact", to: "/contact" },
  { text: "About", to: "/about" },
];

const Navbar: React.FC = () => {
  const blue = "#070E8B";

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#ffffff",
        color: blue,
        boxShadow: "none",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      {/* Thin top blue strip */}
      <Box sx={{ width: "100%", height: "20px", bgcolor: blue }} />

      {/* Centered header content */}
      <Toolbar
        sx={{
          minHeight: 90,
          px: 2,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            maxWidth: "1400px",
            px: 2,
          }}
        >
          {/* LEFT COLUMN — LOGO (slightly off-center) */}
          <Box
            sx={{
              flex: "0 0 200px",        // fixed-ish width keeps nav centered
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <Box
              component={Link}
              to="/"
              sx={{ textDecoration: "none" }}
            >
              <Box
                component="img"
                src={logo}
                alt="Logo"
                sx={{
                  height: 80,
                  width: "auto",
                  display: "block",
                }}
              />
            </Box>
          </Box>

          {/* CENTER COLUMN — NAV ITEMS */}
          <Box
            sx={{
              flex: "1 1 auto",
              display: "flex",
              justifyContent: "center",   // <-- centers nav perfectly
              gap: 3,
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.text}
                component={Link}
                to={item.to}
                sx={{
                  color: blue,
                  fontWeight: 500,
                  fontSize: "1rem",
                  textTransform: "none",
                  letterSpacing: "0.05em",
                  "&:hover": {
                    backgroundColor: "transparent",
                    textDecoration: "underline",
                  },
                  "&:visited": { color: blue },
                  "&:link": { color: blue },
                }}
              >
                {item.text}
              </Button>
            ))}
          </Box>

          {/* RIGHT COLUMN — EMPTY (keeps nav centered) */}
          <Box
            sx={{
              flex: "0 0 200px",
            }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;