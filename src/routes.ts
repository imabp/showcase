export type RouteConfig = {
  display: string;
  path?: string;
  isExternal?: boolean;
};

const Routes: RouteConfig[] = [
  {
    display: "Experience",
    path: "/experiences",
    isExternal: false
  },
  {
    display: "Projects",
    path: "/projects",
    isExternal: false
  },
  {
    display: "Blogs",
    path: "/blogs",
    isExternal: false
  },
  {
    display: "Communities and Leadership",
    path: "/community",
    isExternal: false
  }
];
export default Routes;
