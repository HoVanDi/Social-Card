import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./SocialCard.css";
import CardDetail from "./components/CardDetail";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";

function App() {
  const [showContainer, setShowContainer] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <Router>
      <div className='App'>
        {showContainer && (
          <div className='Container'>
            <div className='Title'>LIST SOCIAL CARD</div>
            <Navbar onSearchChange={setSearchTerm} />
          </div>
        )}
        <Routes>
          <Route
            path='/'
            element={
              <Content
                setShowContainer={setShowContainer}
                searchTerm={searchTerm}
              />
            }
          />
          <Route
            path='/NotFound'
            element={<NotFound />}
          />
          <Route
            path='/CardDetail'
            element={<CardDetail setShowContainer={setShowContainer} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
