import { createBrowserRouter } from "react-router-dom";

import React from "react";
import { Layout } from "../components/Layout";
import { Profile } from "../pages/profile/Profile";
import { HomePage } from "../pages/home/HomePage";
import { Login } from "../pages/login/Login";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "profile", element: <Profile /> },
      { path: "login", element: <Login /> },
    ],
  },
]);
