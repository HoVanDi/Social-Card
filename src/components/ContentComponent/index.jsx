import React from "react";
import styles from "./style.module.css";

const Index = () => {
  return (
    <div className={styles.Body}>
      <div className={styles.Content}>
        <div className={styles.Header}>
          <div className={styles.Profile}>
            <img src="Images/Nguyen-Img.svg" alt />
            <div>
              <div className={styles.Name}>Phu Nguyen</div>
              <div className={styles.Birthday}>14/08/2023</div>
            </div>
          </div>
          <div className={styles.Icon}>
            <div className={styles.EditIcon}>
              <img src="Images/Edit-icon.svg" alt />
            </div>
            <div className={styles.DeleteIcon}>
              <img src="Images/Delete-icon.svg" alt />
            </div>
          </div>
        </div>
        <div className={styles.TextContent}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </div>
        <div className={styles.img}>
          <img src="Images/NguyenContent-img.svg" alt />
        </div>
      </div>

      <div className={styles.Content}>
        <div className={styles.Header}>
          <div className={styles.Profile}>
            <img src="Images/Varen-profile.svg" alt />
            <div>
              <div className={styles.Name}>Varen</div>
              <div className={styles.Birthday}>14/08/2023</div>
            </div>
          </div>
          <div className={styles.Icon}>
            <div className={styles.EditIcon}>
              <img src="Images/Edit-icon.svg" alt />
            </div>
            <div className={styles.DeleteIcon}>
              <img src="Images/Delete-icon.svg" alt />
            </div>
          </div>
        </div>
        <div className={styles.TextContent}>
          Lập một form để tạo mới 1 Social Card , trong card sẽ chứa các thông
          tin: Avatar, Name, Description, Image.
        </div>
        <div className={styles.img}>
          <img src="Images/Varen-img.svg" alt />
        </div>
      </div>

      <div className={styles.Content}>
        <div className={styles.Header}>
          <div className={styles.Profile}>
            <img src="Images/Mio-profile.svg" alt />
            <div>
              <div className={styles.Name}>Mio</div>
              <div className={styles.Birthday}>14/08/2023</div>
            </div>
          </div>
          <div className={styles.Icon}>
            <div className={styles.EditIcon}>
              <img src="Images/Edit-icon.svg" alt />
            </div>
            <div className={styles.DeleteIcon}>
              <img src="Images/Delete-icon.svg" alt />
            </div>
          </div>
        </div>
        <div className={styles.TextContent}>
          Next, you select one property. It doesn’t matter which one you choose,
          yet it’s best to pick one that seems totally unrelated to your
          challenge..
        </div>
        <div className={styles.img}>
          <img src="Images/Mio-img.svg" alt />
        </div>
      </div>

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
