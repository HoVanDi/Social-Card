import React, { useState } from "react";
import "./SocialCard.css";
import ContentComponent from "./components/ContentComponent";
import NavabarComonent from "./components/NavabarComponent";

function App() {
  const [searchData, setSearchData] = useState(""); // State stores the search data

  const handleSearch = (searchTerm) => {
    setSearchData(searchTerm);
  };

  return (
    <div className="Container">
      <div className="Title">LIST SOCIAL CARD</div>

      <NavabarComonent onSearch={handleSearch}></NavabarComonent>

      <ContentComponent searchData={searchData}></ContentComponent>
    </div>
  );
}

export default App;
