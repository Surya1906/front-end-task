import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RootLayout from "./pages/RootLayout.tsx";
import { router } from "./routes/index.tsx";
import { RouterProvider } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RootLayout>
      <RouterProvider router={router} />
    </RootLayout>
  </StrictMode>
);
