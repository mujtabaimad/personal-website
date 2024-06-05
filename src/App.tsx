import React from "react";

import "./App.css";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Portfolio from "./components/portfolio/portfolio";
import Testimonial from "./components/testimonials/testimonials";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
