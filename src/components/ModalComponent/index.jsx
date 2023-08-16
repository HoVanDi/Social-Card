import React from "react";
import styles from "./style.module.css";

const Index = () => {
  return (
    <div className={styles.NewCard}>
      <div className={styles.Modal}>
        <div className={styles.modalContent}>
          <div className={styles.MainContent}>
            <div className={styles.ModalHeader}>Add new card</div>
            <div className={styles.ModalBody}>
              <div className={styles.CardText}>
                <li>Avatar</li>
                <li>Name</li>
                <li>Decription</li>
                <li>Image</li>
              </div>
              <div className={styles.CardInput}>
                <div className={styles.ContentAvatar}>
                  <img
                    src='Images/Upload-solid.svg'
                    alt=''
                  />
                  <div className={styles.Decription}>Upload image</div>
                </div>
                <div className={styles.CardInput}>
                  <input type='text' />
                </div>

                <div className={styles.CardInput}>
                  <textarea></textarea>
                </div>
                <div className={styles.ContentAvatar}>
                  <img
                    src='Images/Upload-solid.svg'
                    alt=''
                  />
                  <div className={styles.Decription}>Upload image</div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.Btn}>
            <div className={styles.SaveBtn}>Save</div>
            <div className={styles.CancelBtn}>Cancel</div>
          </div>
        </div>
      </div>
    </div>

    // <div className={styles.DeleteCard}>
    //   <div className={styles.Modal}>
    //     <div className={styles.modalContent}>
    //       <div className={styles.MainContent}>
    //         <div className={styles.ModalHeader}>
    //           Your about to delete a item
    //         </div>
    //         <div className={`${styles.ModalBody} ${styles.DeleteBody}`}>
    //           <img
    //             src='Images/Trash-can-regular.svg'
    //             alt=''
    //           />
    //           <div className={styles.DecriptionDelete}>
    //             This will delete your item form list<br></br> Are you sure?
    //           </div>
    //         </div>
    //       </div>

    //       <div className={styles.Btn}>
    //         <div className={styles.SaveBtn}>Delete</div>
    //         <div className={styles.CancelBtn}>Cancel</div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Index;
