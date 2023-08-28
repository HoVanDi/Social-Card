import React, { useState } from "react";
import styles from "./style.module.css";
import { getData, getLocalData } from "../Data";
import Modal from "react-modal";
import ModalUpdate from "../ModalUpdate";
import ModalDelete from "../ModalDelete";
// import Navbar from "../Navbar"
import { format } from "date-fns";
import NotFound from "../NotFound";
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

const Index = ({ searchTerm }) => {
  const data = getData();
  const dataLocal = getLocalData();
  console.log(dataLocal);
  // Convert localData object to an array

  //Search
  const filteredData = dataLocal.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalDeleteIsOpen, setModalDeleteIsOpen] = React.useState(false); // Add state for delete modal

  const [editedData, setEditedData] = useState(null);

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

  const [deleteIndex, setDeleteIndex] = React.useState(null);
  const handleDeleteContent = async (index) => {
    // Make a copy of the dataLocal array so that it doesn't affect the state directly
    const newDataLocal = [...dataLocal];
    newDataLocal.splice(index, 1);

    // Update Local Storage with array newDataLocal
    localStorage.setItem("cardData", JSON.stringify(newDataLocal));

    // Update dataLocal state to cause page re-rendering
    setDeleteIndex(newDataLocal);

    closeDeleteModal();
  };

  return (
    <div className={styles.Body}>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'
      >
        <ModalUpdate
          closeModal={closeModal}
          editedData={editedData}
        ></ModalUpdate>
      </Modal>

      <Modal
        isOpen={modalDeleteIsOpen}
        onRequestClose={closeDeleteModal}
        style={customStyles}
        contentLabel='Delete Modal'
      >
        <ModalDelete
          closeModal={closeDeleteModal}
          deleteContent={() => handleDeleteContent(deleteIndex)}
        ></ModalDelete>
      </Modal>
          <div className={styles.Body}>
      {filteredData.length === 0 && searchTerm !== "" ? (
        <NotFound /> // Show NotFound component if no results are found
      ) :
      (filteredData.map((item, index) => (
        <div
          className={styles.Content}
          key={index}
        >
          <div className={styles.Header}>
            <a href='./CardDetail'>
              <div className={styles.Profile}>
                <img
                  src={item.Profile}
                  alt={item.Name}
                />
                <div>
                  <div className={styles.Name}>{item.name} </div>
                  <div className={styles.Birthday}>
                    {format(new Date(), "dd/MM/yyyy")}
                  </div>
                </div>
              </div>
            </a>
            <div className={styles.Icon}>
              <div className={styles.EditIcon}>
                <img
                  onClick={() => {
                    setEditedData(item);
                    openModal();
                  }}
                  src='Images/Edit-icon.svg'
                  alt='Edit'
                />
              </div>
              <div className={styles.DeleteIcon}>
                <img
                  onClick={() => {
                    openDeleteModal(); // Open the delete modal
                    setDeleteIndex(index); // Set the index to be deleted
                  }}
                  src='Images/Delete-icon.svg'
                  alt='Delete'
                />
              </div>
            </div>
          </div>
          <a href='./CardDetail'>
            <div
              className={`${styles.Description} ${
                index === 2 ? styles.DescriptionMio : ""
              }`}
            >
              {item.description}
            </div>
            <div className={styles.img}>
              <img
                src={item.img}
                alt='Image'
              />
            </div>
          </a>
        </div>
      ))
      )}
    </div>
    </div>
  );
};

export default Index;
