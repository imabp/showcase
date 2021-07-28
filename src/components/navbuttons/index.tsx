import "./index.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Grid, ListItemAvatar } from "@material-ui/core";
export type NavButtonTypes = {
  isExternal: boolean;
  path: string;
  display: string;
};

export const NavButton = (props: NavButtonTypes) => {
  const { isExternal, path, display } = props;
  return (
    <Grid item xs={3} sm={3} md={3} lg={3}>
      {!isExternal && (
        <Link to={path} className="navbutton-root-link">
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.4 }
            }}
            whileTap={{ scale: 1 }}
            className="navbutton-root"
          >
            {display}
          </motion.div>
        </Link>
      )}
      {isExternal && (
        <a href={path} rel="noreferrer noopenner" target="_blank">
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.4 }
            }}
            whileTap={{ scale: 0.9 }}
            className="navbutton-root"
          >
            {display}
          </motion.div>
        </a>
      )}
    </Grid>
  );
};
