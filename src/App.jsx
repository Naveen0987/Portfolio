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
     <a
  href="https://wa.me/918639868030?text=Hi%20Naveen,%20I%20visited%20your%20portfolio."
  className="whatsapp-btn"
  target="_blank"
  rel="noreferrer"
>
  <FaWhatsapp />
</a>
    </>
  );
}

export default App;
