import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage, RegisterPage, LoginPage, UserPage, ErrorPage, NewNote, NoteId, NotesPage, EditNote } from "./Pages/Index.jsx";
const rootNode = document.getElementById("root");

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/Register",
    element: <RegisterPage />,
  },
  {
    path: "/Login",
    element: <LoginPage />,
  },
  {
    path: "/User",
    element: <UserPage />,
  },
  {
    path: "/Error",
    element: <ErrorPage />,
  },
  {
    path: "/NewNote",
    element: <NewNote />,
  },
  {
    path: "/NoteId",
    element: <NoteId />,
  },
  {
    path: "/Notes",
    element: <NotesPage />,
  },
  {
    path: "/EditNote",
    element: <EditNote />,
  },
]);

ReactDOM.createRoot(rootNode).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
