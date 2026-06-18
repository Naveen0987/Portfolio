import React from "react";
import Home from "./pages/Home";
import Background from "./components/Background";
import useScrollReveal from "./hooks/useScrollReveal";
import ScrollProgress from "./components/ScrollProgress";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  useScrollReveal();

  return (
    <>
      <ScrollProgress />
      <Background />
      <ScrollToTop />
      <Home />
    </>
  );
}

export default App;