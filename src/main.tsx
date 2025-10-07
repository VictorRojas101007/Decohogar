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
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';


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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutos por defecto
      gcTime: 10 * 60 * 1000, // 10 minutos por defecto
      retry: 2, // Reintentar 2 veces en caso de error
      retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
      refetchOnWindowFocus: false, // No refetch al cambiar de ventana
      refetchOnReconnect: true, // Refetch al reconectar internet
    },
  },
});


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
