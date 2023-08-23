import React from "react";
import styles from "./style.module.css";
import { getData, getLocalData } from "../Data";
import Modal from "react-modal";
import ModalAdd from "../ModalAdd";
import ModalDelete from "../ModalDelete";
import { format } from "date-fns";
// import { Link } from "react-router-dom";
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
  const data = getData();
  const dataLocal = getLocalData();
  console.log(dataLocal);
  // Convert localData object to an array

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

  const [deleteIndex, setDeleteIndex] = React.useState(null);
  const handleDeleteContent = async (index) => {
    // Tạo bản sao của mảng dataLocal để không ảnh hưởng trực tiếp đến state
    const newDataLocal = [...dataLocal];
    newDataLocal.splice(index, 1); // Xóa nội dung tại chỉ mục index

    // Cập nhật Local Storage với mảng newDataLocal
    localStorage.setItem("cardData", JSON.stringify(newDataLocal));

    // Cập nhật state dataLocal để gây hiển thị lại trang
    setDeleteIndex(newDataLocal);

    // Đóng modal sau khi thực hiện xóa
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
        <ModalAdd closeModal={closeModal}></ModalAdd>
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

      {data.map((item, index) => (
        <div className={styles.Content}>
          <div
            key={index}
            className={styles.Header}
          >
            <a href='./CardDetail'>
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
            </a>
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
          <a href='./CardDetail'>
            <div
              className={`${styles.Description} ${
                index === 2 ? styles.DescriptionMio : ""
              }`}
            >
              {item.Description}
            </div>
            <div className={styles.img}>
              <img
                src={item.img}
                alt='Image'
              />
            </div>
          </a>
        </div>
      ))}

      {dataLocal.map((item, index) => (
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
                  onClick={openModal}
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
      ))}
    </div>
  );
};

export default Index;
