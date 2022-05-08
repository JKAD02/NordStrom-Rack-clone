import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Login from "./components/logIn/Login";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/login/:name' element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
