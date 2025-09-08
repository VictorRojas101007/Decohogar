import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
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

const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
