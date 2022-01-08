import React, { Fragment } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

function App(props) {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <AboutUs />
      <Footer />
    </Fragment>
  );
}

export default App;
