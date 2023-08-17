import styles from "./style.module.css";
import Modal from "react-modal";
import React from "react";
import ModalAdd from "../ModalAdd";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0px",
    border: "none",
    boxShadow: "none",
    background: "none",
  },
};

const Index = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <div className={styles.Navbar}>
        <div
          className={styles.BtnAdd}
          onClick={openModal}
        >
          Add new
        </div>
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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'
      >
        <ModalAdd closeModal={closeModal}></ModalAdd>
      </Modal>
    </div>
  );
};

export default Index;
