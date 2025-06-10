import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import "../style.css";
import logo from "../logo.png";

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const navItems = [
    { text: "SHOP", to: "/shop" },
    { text: "TESTIMONIALS", to: "/testimonials" },
    { text: "CONTACT", to: "/contact" },
  ];

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#f0f0f0', height: '120px', boxShadow: 'none' }}>
      <Toolbar
        sx={{
          height: '100px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        {/* Hamburger icon */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
          sx={{ position: "absolute", left: 55, bottom: 20, color: "#9c6d28" }}
        >
          <MenuIcon />
        </IconButton>

        {/* Drawer */}
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          <Box sx={{ width: 250, paddingTop: 2 }} role="presentation">
            <IconButton onClick={toggleDrawer(false)} sx={{ ml: 1 }}>
              <ArrowBackIcon />
            </IconButton>
            <List sx={{ mt: 2 }}>
              {navItems.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton component={Link} to={item.to}>
                    <ListItemText primary={item.text} primaryTypographyProps={{ sx: { color: '#9c6d28', fontWeight: 'bold' } }} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>

        {/* Triangle */}
        <Box
          sx={{
            position: 'absolute',
            bottom: -40,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 0,
            height: 0,
            borderLeft: '100px solid transparent',
            borderRight: '100px solid transparent',
            borderTop: '25px solid #ffffff',
          }}
        />

        {/* Centered logo */}
        <Box sx={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <img
              src={logo}
              alt="Engraving4All Logo"
              style={{ height: '100px', width: 'auto', display: 'block' }}
            />
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
