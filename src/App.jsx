import { useState } from "react";
import { Header } from "./Components/layout/Header/Header";
import { Content } from "./Components/layout/Content/Content";
import { Footer } from "./Components/layout/Footer/Footer";
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
