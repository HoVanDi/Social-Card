import React from "react";
import styles from "./style.module.css";
import { getData } from "../Data";
import Modal from "react-modal";
import ModalAdd from "../ModalAdd";
import ModalDelete from "../ModalDelete";
import { Link } from "react-router-dom";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0px",
    border: "0px",
    background: "none",
  },
};

const Index = () => {
  const data = getData();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalDeleteIsOpen, setModalDeleteIsOpen] = React.useState(false); // Add state for delete modal

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function openDeleteModal() {
    setModalDeleteIsOpen(true);
  }

  function closeDeleteModal() {
    setModalDeleteIsOpen(false);
  }

  return (
    <div className={styles.Body}>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'
      >
        <ModalAdd closeModal={closeModal}></ModalAdd>
      </Modal>

      <Modal
        isOpen={modalDeleteIsOpen}
        onRequestClose={closeDeleteModal}
        style={customStyles}
        contentLabel='Delete Modal'
      >
        <ModalDelete closeModal={closeDeleteModal}></ModalDelete>
      </Modal>

      {data.map((item, index) => (
        <a href="./CardDetail"
          className={styles.Content}
        >
          <div
            key={index}
            className={styles.Header}
          >
            <div className={styles.Profile}>
              <img
                src={item.Profile}
                alt={item.Name}
              />
              <div>
                <div className={styles.Name}>{item.Name}</div>
                <div className={styles.Birthday}>{item.Birthday}</div>
              </div>
            </div>
            <div className={styles.Icon}>
              <div className={styles.EditIcon}>
                <img
                  onClick={openModal}
                  src='Images/Edit-icon.svg'
                  alt='Edit'
                />
              </div>
              <div className={styles.DeleteIcon}>
                <img
                  onClick={openDeleteModal}
                  src='Images/Delete-icon.svg'
                  alt='Delete'
                />
              </div>
            </div>
          </div>
          <div

            className={`${styles.Description} ${
              index === 2 ? styles.DescriptionMio : ""
            }`}
          >
            <a href="./CardDetail"></a>
            {item.Description}
          </div>
          <div className={styles.img}>
            <img
              src={item.img}
              alt='Image'
            />
          </div>
        </a>
      ))}
    </div>
  );
};

export default Index;
