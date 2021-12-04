import React from "react";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";

const App = () => {
  return (
    <>
      <Header />
      <Collaboration />
      <Gallery />
      <Portfolio />
      <Footer />
    </>
  );
};

export default App;
