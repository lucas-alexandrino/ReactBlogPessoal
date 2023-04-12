import React from "react";
import "./home.css";
import { BottomNavigation, BottomNavigationAction, Box , Button , Menu , MenuItem } from "@mui/material";

import { Restore , Favorite, LocationOn } from "@mui/icons-material";
function Home() { 


  return (
    <>

    <Box sx={{ width: 500 }}>
      <BottomNavigation
        
       
      >
        <BottomNavigationAction label="Recents" icon={<Restore />} />
        <BottomNavigationAction label="Favorites" icon={<Favorite />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOn />} />
      </BottomNavigation>
    </Box>

    
    </>
  );
};

export default Home;
