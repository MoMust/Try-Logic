import { useState } from "react";
import { Header } from "./Components/layout/Header/Header";
import { Content } from "./Components/layout/content/content";
import { Footer } from "./Components/layout/footer/footer";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <div className="hero-container ">
          <Header />
          <Content />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
