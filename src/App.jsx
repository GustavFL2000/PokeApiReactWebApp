//Import til routing (router import, routing pages imports fx(home = /))
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Pokemons from "./pages/Pokemons";

import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (// TO:DO Skal have en form for header der har kanpper til de forskellige sider 
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Pokemons" element={<Pokemons />} />
          <Route path="/Info" element={<Info />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App
