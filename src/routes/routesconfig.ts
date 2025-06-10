import { lazy } from "react";

const Home = lazy(() => import("../pages/home"));

export const routeComponents = {
  home: Home,
} as const;

export const routePaths = {
  home: "/",
};
