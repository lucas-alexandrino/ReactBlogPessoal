import { Grid , } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <>
<Grid container spacing={2} columns={16}>
  <Grid item xs={8}>
    <Item>xs=8</Item>
  </Grid>
  <Grid item xs={8}>
    <Item>xs=8</Item>
  </Grid>
</Grid>
    </>
  );

}
export default Footer;
