import { createBrowserRouter } from "react-router-dom";
import React from "react";
import { Layout } from "../components/Layout.tsx";
import { Profile } from "../pages/profile/Profile.tsx";
import { Login } from "../pages/login/Login.tsx";
import { HomePage } from "../pages/home/HomePage.tsx";
import { Error } from "../pages/Error.tsx";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "profile", element: <Profile /> },
      { path: "login", element: <Login /> },
      { path: "*", element: <Error /> },
    ],
  },
]);
