import React from "react";
import { Grid } from "@material-ui/core";
import { UserConfig } from "./../config";
const Home = (props: UserConfig) => {
  return (
    <>
      <Grid
        className="leftpanel-home-container"
        container
        style={{ margin: "15px", textAlign: "left" }}
      >
        <Grid item xs={12} className="leftpanel-home-name">
          <h1>{props.name}</h1>

          <h3>{props.title}</h3>

          <h2>{props.subtitle}</h2>
        </Grid>
        <Grid item xs={12}>
          <h3>{props.quote}</h3>
        </Grid>
        <Grid xs={12}>
          Sounds Interesting?
          <h3>{props.email}</h3>
        </Grid>
      </Grid>
    </>
  );
};
export default Home;
