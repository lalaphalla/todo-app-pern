import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";

import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
import LoginPage from "./pages/Login";
import DashboardPage from "./pages/Dashboard";
import theme from './theme/theme'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "/dashboard", element: <DashboardPage /> },
        { path: "/login", element: <LoginPage /> },
      ],
    },
  ]);
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
