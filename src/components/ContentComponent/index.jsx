import React from "react";
import styles from "./style.module.css";
import { getData } from '../Data';

const Index = () => {
  const data = getData();
  
  return (
      <div className={styles.Body}>
      {data.map((item, index) => (
        <div key={index} className={styles.Content}>
          <div className={styles.Header}>
            <div className={styles.Profile}>
              <img src={item.Profile} alt={item.Name} />
              <div>
                <div className={styles.Name}>{item.Name}</div>
                <div className={styles.Birthday}>{item.Birthday}</div>
              </div>
            </div>
            <div className={styles.Icon}>
              <div className={styles.EditIcon}>
                <img src="Images/Edit-icon.svg" alt="Edit" />
              </div>
              <div className={styles.DeleteIcon}>
                <img src="Images/Delete-icon.svg" alt="Delete" />
              </div>
            </div>
          </div>
          <div className={`${styles.Description} ${index === 2 ? styles.DescriptionMio : ''}`}>{item.Description}</div>
          <div className={styles.img}>
            <img src={item.img} alt="Image" />
          </div>
        </div>
      ))}


      <div className={styles.SearchUndefined}>
      <img
        src='Images/Error-img.svg'
        alt
      />
      <div className={styles.TextResult}>No Results Found</div>
      <div className={styles.Messenger}>
        No content matched your criteria. Try searching for something else.
      </div>
    </div>



    </div>
  );
};

export default Index;
