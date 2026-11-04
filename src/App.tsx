import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./site/Home";
import { LangProvider } from "./site/lang";
import Rambo from "./components/Rambo";
import PitbullProducts from "./components/PitbullProducts";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LangProvider>
              <Home />
            </LangProvider>
          }
        />
        <Route path="/rambo" element={<Rambo />} />
        <Route path="/pitbull-products" element={<PitbullProducts />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
