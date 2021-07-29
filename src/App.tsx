import "./styles.css";
import { Route, Switch, Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { Home, Resume } from "./Panels/Content";
import { NavButton } from "./components";
import { User } from "./Panels/Content/config";
import Routes from "./routes";
import Terminal from "./Panels/Terminal";
export default function App() {
  return (
    <Grid className="root" container>
      <Grid className="leftPanel" item xs={12} sm={12} md={6} lg={6}>
        <Switch>
          <Route path="/" exact>
            <Home {...User} />
          </Route>
          <Route path="/resume" exact>
            <Resume />
          </Route>
        </Switch>
      </Grid>
      <Grid className="rightPhanel" item xs={12} sm={12} md={6} lg={6}>
        <Grid item xs={12} sm={12} md={12} lg={12} style={{ padding: "20px" }}>
          <h4>
            I love working with Typescript and Java.
            <br />
            But can also get you up with community, product and brand development
            <br /><br />

          </h4>
          <body style={{ fontWeight: 'lighter' }}>This showcase portfolio is still in dev. <br /> Want to add features? Lets discuss here on <a href="https://github.com/imabp"
            rel="noreferrer noopenner"
            target="_blank"
            style={{ color: 'aqua', textDecoration: 'none' }}
          >GitHub</a><br /></body>
        </Grid>
        {/* 
        <Grid container xs={12} sm={12} md={12} lg={12}
          alignItems="center"
          direction="column"
        > */}
        {/* <Center> */}
        {

          // Routes.map((el) => (
          //   <Grid container alignItems="center"
          //     direction="column">
          //     <NavButton
          //       path={el.path ? el.path : "/"}
          //       isExternal={el.isExternal ? el.isExternal : false}
          //       display={el.display ? el.display : ""}
          //     />
          //   </Grid>
          // ))

        }

        {/* </Grid> */}
        {/* <Grid style={{ marginTop: "calc(100% - 95%)" }} item xs={12} md={12} lg={12} sm={12}>
          Hello are you interested in CS?<br/> Try it out on terminal!!<br/>
          Start with <code>whoami</code> or <code>help</code>
            <div className="terminal">
            <Terminal />
            </div>
        </Grid> */}
      </Grid>
    </Grid>
  );
}
