import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeMenu from "./components/HomeMenu";
import Footer from "./components/Footer";
import Faq from "./components/Faq";
import Menu from "./components/Menu";

function App(props) {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Fragment>
              <Hero />
              <HomeMenu />
            </Fragment>
          }
        />
        <Route path="faq" element={<Faq />} />
        <Route path="menu" element={<Menu />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
