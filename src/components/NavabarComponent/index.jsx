import React from "react";
import styles from "./style.module.css";
const index = () => {
  return (
    <div className={styles.Navbar}>
      <div className={styles.BtnAdd}>Add new</div>
      <div className={styles.Search}>
        <div className={styles.SearchName}>
          <input
            type='text'
            placeholder='Search name...'
          />
        </div>
        <div className={styles.IconSearch}>
          <img
            src='Images/Search-img.svg'
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default index;
