import "./App.css";
import { DisplayCard } from "./components/DisplayCard";
import tom from "./img/majortom.png";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Banner } from "./components/Banner";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { AddImage } from "./pages/AddImage";
import { Sudo } from "./pages/Sudo";
import { useState } from "react";
function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home setIsAuth={setIsAuth} isAuth={isAuth} />}
          />
          <Route path="/about" element={<About isAuth={isAuth} />} />
          <Route path="/addimage" element={<AddImage isAuth={isAuth} />} />
          {/* <Route path="/sudo" element={<Sudo />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
