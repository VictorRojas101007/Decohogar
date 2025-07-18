import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import "./index.css";
import Category from "./Routes/Category";
import React from "react";
import TermsAndConditions from "./Routes/TermsAndConditions";


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
  {
    path:"/terminos-y-condiciones",
    element: <TermsAndConditions/>
  }
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);
