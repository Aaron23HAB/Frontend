import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./HomePage.jsx";
import { RegisterPage } from "./RegisterPage.jsx";
import { LoginPage } from "./LoginPage.jsx";
import { UserPage } from "./UserPage.jsx";
import { ErrorPage } from "./Pages/ErrorPage.jsx";
import { NewNote } from "./Pages/NewNote.jsx";
import { NoteId } from "./Pages/NoteId.jsx";
import { NotesPage } from "./Pages/NotesPage.jsx";
import { EditNote } from "./Pages/EditNote.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/user",
    element: <UserPage />,
  },
  {
    path: "/error",
    element: <ErrorPage />,
  },
  {
    path: "/newNote",
    element: <NewNote />,
  },
  {
    path: "/noteId/:id",
    element: <NoteId />,
  },
  {
    path: "/notes",
    element: <NotesPage />,
  },
  {
    path: "/editNote/:id",
    element: <EditNote />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
