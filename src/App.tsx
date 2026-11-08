import { lazy, Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./site/Personal";
import { LangProvider } from "./site/lang";
import "./App.css";

const Rambo = lazy(() => import("./components/Rambo"));
const PitbullProducts = lazy(() => import("./components/PitbullProducts"));

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
        <Route path="/rambo" element={<Suspense fallback={null}><Rambo /></Suspense>} />
        <Route path="/pitbull-products" element={<Suspense fallback={null}><PitbullProducts /></Suspense>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
