import React, { useState } from "react";
import "./SocialCard.css";
// import ContentComponent from "./components/ContentComponent";
// import NavbarComonent from "./components/NavbarComponent";
import ModalComponent from "./components/ModalComponent";

function App() {
  const [searchData, setSearchData] = useState(""); // State stores the search data

  const handleSearch = (searchTerm) => {
    setSearchData(searchTerm);
  };

  return (
    <div>
    <div className="Container">
      {/* <div className="Title">LIST SOCIAL CARD</div> */}

      {/* <NavbarComonent onSearch={handleSearch}></NavbarComonent>

      <ContentComponent searchData={searchData}></ContentComponent> */}
    </div>
    <ModalComponent></ModalComponent>
    
    </div>


  );
}

export default App;
