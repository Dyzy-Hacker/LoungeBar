import React from "react";
import {
  Navbar,
  Home,
  AboutUs,
  ExploreFood,
  Testimonials,
  Footer,
} from "./components";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutUs />
      <ExploreFood />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
