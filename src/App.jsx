import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <main>
      <Header />
       <BrowserRouter>
       </BrowserRouter>
      <Footer />
    </main>
  );
}

export default App;
