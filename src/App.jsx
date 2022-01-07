import React, { Fragment } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";

function App(props) {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <AboutUs />
    </Fragment>
  );
}

export default App;
