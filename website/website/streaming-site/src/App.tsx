import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import "./assets/css/main.css";
import "./assets/css/variables.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
