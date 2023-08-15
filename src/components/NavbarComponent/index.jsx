import React, { useState } from "react";
import styles from "./style.module.css";
const Index = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className={styles.Navbar}>
      <div className={styles.BtnAdd}>Add new</div>
      <div className={styles.Search}>
        <div className={styles.SearchName}>
          <input
            type='text'
            placeholder='Search name...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className={styles.IconSearch}>
          <img
            src='Images/Search-img.svg'
            alt=''
            onClick={handleSearch}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
