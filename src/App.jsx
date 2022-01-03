import React, { Fragment } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App(props) {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <div className="h-[6000px] w-full"></div>
    </Fragment>
  );
}

export default App;
