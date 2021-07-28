import React from "react";
import { motion } from "framer-motion";
import { Grid } from "@material-ui/core";
import { UserConfig } from "./../config";
import { NavButton } from "./../../../components/index";
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
          <NavButton isExternal={false} path="/resume" display="View Resume" />

          <body>
            Proudly Volunteering... <br />
            <br />
            <b>#Microsoft</b> Gold Student Ambassador
            <br />
            <b>#Postman</b> Student Expert and Leader
            <br />
            <b>#Judge</b> at MLH Fellowship for
            <br />
            Production Engineering Fellows
          </body>
        </Grid>
        <Grid item xs={12}>
          Sounds Interesting?
          <h3>{props.email}</h3>
          <br />
        </Grid>
      </Grid>
    </>
  );
};
export default Home;
