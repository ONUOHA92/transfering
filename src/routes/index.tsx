import React from "react";
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";
import { useSelector } from "react-redux";
// @ts-ignore
import Home from "../pages/home/index.tsx";
// @ts-ignore
import Shop from "../pages/shop/index.tsx";
// @ts-ignore
import Product from "../pages/shop/product.tsx";
// @ts-ignore
import Coach from "../pages/coach/index.tsx";
// @ts-ignore
import Login from "../pages/login/index.tsx";
// @ts-ignore
import SignUpAs from "../components/Modal/SignUpAs.tsx";
// @ts-ignore
import SignUpAsCoach from "../pages/signup/coach.tsx";
// @ts-ignore
import SignUpAsPlayer from "../pages/signup/player.tsx";
// @ts-ignore
import Player from "../pages/player/index.tsx";

const ReactRouter = (): React.ReactElement<any, string | React.JSXElementConstructor<any>> => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "shop", element: <Shop /> },
    { path: "shop/product", element: <Product /> },
    { path: "coach", element: <Coach /> },
    { path: "login", element: <Login /> },
    { path: "sign-up/coach", element: <SignUpAsCoach /> },
    { path: "sign-up/player", element: <SignUpAsPlayer /> },
    { path: "player-profile", element: <Player /> }
  ]);
  // @ts-ignore
  return routes;
};

const AppRouter = (): JSX.Element => {
  // @ts-ignore
  const state = useSelector(state => state.isModalOpen.value);
  return (
    <>
      <Router>
        <ReactRouter />
        <SignUpAs isOpen={state} />
      </Router>
    </>
  )
}

export default AppRouter;
