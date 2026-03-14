import { createBrowserRouter } from "react-router";
import { LandingPage } from "./components/landing-page";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
]);