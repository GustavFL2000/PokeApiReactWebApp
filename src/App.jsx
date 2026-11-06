//Import til routing (router import, routing pages imports fx(home = /))
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Info from "./pages/Info";


function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Home" element={<Home />}/>
          <Route path="/Info" element={<Info />}/>
        </Routes>
      </main>
    </Router>
  );
}

export default App
