import React from "react";
import "./home.css";
import { Grid, Paper } from "@material-ui/core";

function Home() {
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={4}>
          <Paper style={{ height: "100vh", background: "lightgrey" }} />
        </Grid>
        <Grid item container direction="row-reverse" spacing={2}>
          <Grid item sm={4}>
            <Paper style={{ height: "49vh", background: "orange" }} />
          </Grid>
          <Grid item sm={4}>
            <Paper style={{ height: "49vh", background: "grey" }} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
