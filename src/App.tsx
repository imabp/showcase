import "./styles.css";
import { Grid } from "@material-ui/core";
import { Home } from "./Panels/Content";
import { User } from "./Panels/Content/config";
export default function App() {
  return (
    <Grid className="root" container>
      <Grid className="leftPanel" item xs={12} sm={12} md={6} lg={6}>
        <Home {...User} />
      </Grid>
      <Grid className="rightPhanel" item xs={12} sm={12} md={6} lg={6}></Grid>
    </Grid>
  );
}
