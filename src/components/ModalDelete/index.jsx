import React from "react";
import styles from "./style.module.css";

const index = ({ closeModal, deleteContent }) => {
  return (
    <div className={styles.DeleteCard}>
      <div className={styles.Modal}>
        <div className={styles.modalContent}>
          <div className={styles.MainContent}>
            <div className={styles.ModalHeader}>
              Your about to delete a item
            </div>
            <div className={`${styles.ModalBody} ${styles.DeleteBody}`}>
              <img
                src='Images/Trash-can-regular.svg'
                alt=''
              />
              <div className={styles.DecriptionDelete}>
                This will delete your item form list<br></br> Are you sure?
              </div>
            </div>
          </div>

          <div className={styles.Btn}>
            <div
              className={styles.SaveBtn}
              onClick={deleteContent}
            >
              Delete
            </div>
            <div
              className={styles.CancelBtn}
              onClick={closeModal}
            >
              Cancel
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
