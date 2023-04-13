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
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton 
              
              className="button_icon">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Postagens
            </Typography>
            <Button id='buttonLogin'>Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      
    </>
  );
}

export default Navbar;
