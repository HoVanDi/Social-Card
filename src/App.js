import React, { useState } from "react";
import "./SocialCard.css";
import Content from "./components/Content";
import NoFound from "./components/NotFound";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {


  return (
    <Router>
      <div className='Container'>
        <div className='Title'>LIST SOCIAL CARD</div>
        <Navbar ></Navbar>
      </div>
      <Routes>
        <Route
          path='/'
          element={<Content />}
        />
        <Route
          path='/NoFound'
          element={<NoFound />}
        />
      </Routes>
    </Router>
  );
}

export default App;
