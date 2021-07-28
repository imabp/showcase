import "./index.css";
import { Link } from "react-router-dom";
export type NavButtonTypes = {
  isExternal: boolean;
  path: string;
  display: string;
};

export const NavButton = (props: NavButtonTypes) => {
  const { isExternal, path, display } = props;
  return (
    <div className="navbutton-root">
      {!isExternal && (
        <Link to={path} className="navbutton-root-link">
          <div>{display}</div>
        </Link>
      )}
      {isExternal && (
        <a href={path} rel="noreferrer noopenner" target="_blank">
          <div>{display}</div>
        </a>
      )}
    </div>
  );
};
