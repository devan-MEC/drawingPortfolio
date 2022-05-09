import "./App.css";
import { DisplayCard } from "./components/DisplayCard";
import tom from "./img/majortom.png";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Banner } from "./components/Banner";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
