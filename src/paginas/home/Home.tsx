import React from "react";
import "./home.css";
import { Box , Button } from "@mui/material";
import { Paper } from "@material-ui/core";

function Home() {
  return (
    <>
      <Paper>
        <Box p={2}>
          <Box display="flex" justifyContent="center">
            <h1>Titulo</h1>
          </Box>
          <img src="lucas-alexandrino.github.io" alt="algo" style={{width: "100%", height: "100%"}} />
          <Box display="flex" justifyContent="center" p={2}>
            <Button variant="contained" color="primary">Texto1</Button>
            <Button variant="contained" color="secondary">Texto2</Button>
          </Box>
        </Box>
      </Paper>
    </>
  );
}

export default Home;
