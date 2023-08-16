import React, { useState } from "react";
import "./SocialCard.css";
import ModalComponent from "./components/ModalComponent";
import CardDetailComponent from "./components/CardDetailComponent";
import ContentComponent from "./components/ContentComponent";
import NavbarComonent from "./components/NavbarComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [searchData, setSearchData] = useState(""); // State stores the search data

  const handleSearch = (searchTerm) => {
    setSearchData(searchTerm);
  };

  return (
    <Router>
      <div className='Container'>
        <div className='Title'>LIST SOCIAL CARD</div>
        <NavbarComonent onSearch={handleSearch}></NavbarComonent>

        {/* <ContentComponent searchData={searchData}></ContentComponent> */}
      </div>
      {/* <ModalComponent></ModalComponent> */}

      {/* <CardDetailComponent></CardDetailComponent> */}
      <Routes>
        <Route />
        <Route
          path='*'
          element={<ContentComponent />}
        />
      </Routes>
    </Router>
  );
}

export default App;
