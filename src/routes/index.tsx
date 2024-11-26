import { createBrowserRouter } from "react-router";
import ListUsersPage from "@/pages/ListUsersPage";

export const router = createBrowserRouter([
  { path: "/", element: <ListUsersPage /> },
]);
