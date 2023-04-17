import { Grid } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <>
      <Grid container spacing={2} columns={16} style={{ minHeight: "100vh" }}>
        <Grid item xs={8}>
          <h1> footer</h1>
        </Grid>
        <Grid item xs={8}>
          <h1> footer 2</h1>
        </Grid>
      </Grid>
    </>
  );
}
export default Footer;
