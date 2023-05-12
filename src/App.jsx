import React, { useState, useEffect } from "react";
// import Preloader from "./components/Pre";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contacts from "./components/Contacts/Contacts";
import css from "./styles/app.module.scss";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
const App = () => {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Router>
      {/* <Preloader load={load} /> */}
      <div
        className={`bg-primary ${css.container}`}
        id={load ? "no-scroll" : "scroll"}>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contacts" element={<Contacts />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
