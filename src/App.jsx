import "./App.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./Pages/HomePage.jsx";
import { RegisterPage } from "./Pages/RegisterPage.jsx";
import { LoginPage } from "./Pages/LoginPage.jsx";
import { UserPage } from "./Pages/UserPage.jsx";
import { ErrorPage } from "./Pages/ErrorPage.jsx";
import { NewNote } from "./Pages/NewNote.jsx";
import { NoteId } from "./Pages/NoteId.jsx";
import { NotesPage } from "./Pages/NotesPage.jsx";
import { EditNote } from "./Pages/EditNote.jsx";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user/:id" element={<UserPage />} />
        <Route path="/newNote" element={<NewNote />} />
        <Route path="/noteId/:id" element={<NoteId />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/editNote/:id" element={<EditNote />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
