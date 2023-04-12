import { MenuItem } from "@material-ui/core";
import { AccountCircle, Search } from "@material-ui/icons";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Menu,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon/>
                
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Postagens
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Navbar;
