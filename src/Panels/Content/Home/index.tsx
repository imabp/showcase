import React from "react";
import { motion } from "framer-motion";
import { Grid } from "@material-ui/core";
import { UserConfig } from "./../config";
import { NavButton } from "./../../../components/index";
import { useExperience } from "../../../lib/api/useExperience";
import { useVolunteer } from "../../../lib/api/useVolunteer";
const Home = (props: UserConfig) => {
  const experience = useVolunteer();
  console.log(experience!=[]?experience:null);

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
          <br />
          <body>
            Proudly Volunteering... <br />
            <b>#Microsoft</b> Gold Student Ambassador
            <br />
            <b>#Postman</b> Student Expert and Leader
            <br />
            <b>#Judge</b> at MLH Fellowship for
            <br />
            Production Engineering Fellows
          </body>
          <br />
          <h4>Connect here</h4>
          <a
            href={`https://twitter.com/${props.twitter}`}
            target="_blank"
            rel="noopenner noreferrer"
          >
            <img
              src="https://media.discordapp.net/attachments/834130556865347645/869847461567561778/twitter_circle-512.png"
              height="30"
              width="30"
              style={{ marginTop: "5px", marginRight: "10px" }}
              alt="Twitter_imabptweets"
            />
          </a>
          <a
            href={`https://github.com/${props.github}`}
            target="_blank"
            rel="noopenner noreferrer"
          >
            <img
              src="https://media.discordapp.net/attachments/834130556865347645/869848172653064242/25231.png"
              height="30"
              width="30"
              style={{ marginTop: "5px", marginRight: "10px" }}
              alt="GitHub_Imabp"
            />
          </a>
          <a
            href={`https://linkedin.com/in/${props.linkedin}`}
            target="_blank"
            rel="noopenner noreferrer"
          >
            <img
              src=" https://cdn.discordapp.com/attachments/834130556865347645/869848926155571240/linkedin-circle-1868976-1583140.png"
              height="30"
              width="30"
              alt="Linkedin_imabp"
            />
          </a>
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
