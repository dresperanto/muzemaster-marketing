import React from "react";
import Features from "./Features";
import Faq from "./Faq";
import Contact from "./Contact";

const Main = () => {
  return (
    <div>
      <main className="main-content">
        <Features />
        <Faq />
        <Contact />
      </main>
    </div>
  );
};

export default Main;
