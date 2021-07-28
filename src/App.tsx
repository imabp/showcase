import "./styles.css";
import { Route, Switch, Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { Home, Resume } from "./Panels/Content";
import { NavButton } from "./components";
import { User } from "./Panels/Content/config";
import Routes from "./routes";
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
            What you looking for,
            <br />
            might be here :)
          </h4>
        </Grid>

        <Grid container xs={12} sm={12} md={12} lg={12}
        alignItems="center"
        direction="column"
        >
          {/* <Center> */}
            {Routes.map((el) => (
              <>
                <NavButton
                  path={el.path?el.path:"/"}
                  isExternal={el.isExternal?el.isExternal:false}
                  display={el.display?el.display:""} 
                />
              </>
            ))}
          {/* </Center> */}
        </Grid>
      </Grid>
    </Grid>
  );
}
