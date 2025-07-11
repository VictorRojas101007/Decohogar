import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import "./index.css";
import Category from "./Routes/Category";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/niñas",
    element: <Category category="Niñas" />,
  },
  {
    path: "/niños",
    element: <Category category="Niños" />,
  },
  {
    path: "/hogar",
    element: <Category category="Hogar" />,
  },
  {
    path: "/fotomurales",
    element: <Category category="Fotomurales" />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);
