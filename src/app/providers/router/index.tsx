import React from "react";
import {
  createBrowserRouter,
  RouterProvider as ReactRouterProvider,
  Navigate,
  Outlet,
} from "react-router-dom";

import { ProtectedRoute, PublicRoute } from "@/features/auth";
import { Login } from "@/pages/login";
import { Users } from "@/pages/users";
import { NotFound } from "@/pages/not-found";
import { queryClient } from "../query";
import { usersLoader } from "@/pages/users/model/use-user-loader";

const RootLayout: React.FC = () => <Outlet />

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/login" replace />,
      },
      {
        path: "/users",
        element: (
          <ProtectedRoute>
            <Users />
          </ProtectedRoute>
        ),
        loader: usersLoader(queryClient),
      },
      {
        path: "/login",
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export const RouterProvider: React.FC = () => {
  return <ReactRouterProvider router={router} />;
};
