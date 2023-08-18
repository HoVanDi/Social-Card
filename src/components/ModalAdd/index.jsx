import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./style.module.css";

const Index = ({ closeModal }) => {
  const [uploadedImageNameProfile, setUploadedImageNameProfile] =
    useState(null);
  const [hasUploadedProfile, setHasUploadedProfile] = useState(false);

  const [uploadedImageNameContent, setUploadedImageNameContent] =
    useState(null);
  const [hasUploadedContent, setHasUploadedContent] = useState(false);

  const handleImageUploadProfile = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedImageNameProfile(file.name);
      setHasUploadedProfile(true);
    }
  };

  const handleImageUploadContent = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedImageNameContent(file.name);
      setHasUploadedContent(true);
    }
  };

  useEffect(() => {
    const form = document.getElementById("form-add");
    const profileImg = document.getElementById("upload-img-profile");
    console.log("Form element:", form);
    console.log("Profile image element:", profileImg);

    if (form && profileImg) {
      form.addEventListener("submit", async function (e) {
        e.preventDefault();
        uploadFiles(profileImg.files);

        // const url = await uploadFiles(profileImg.files);
        // console.log(profileImg.files);
        //   addCard({
        //     name: Name.value,
        //     imgprofile: imgimgprofile.value,
        //     imgcontent: imgimgprofile.url,
        //   })
        //  .then(()=>Router.navigate("/content"))
        //  .catch((error)=>console.log(error))
      });
    }
  }, []); // Empty dependency array means this effect runs once after initial render

  const uploadFiles = async (files) => {
    if (files) {
      const CLOUD_NAME = "dsp0tuvsv";
      const PRESET_NAME = "upload-img";
      const url = [];
      const FOLDER_NAME = "SOCIAL";
      const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

      const formData = new FormData(); //key value

      formData.append("upload_preset", PRESET_NAME);
      formData.append("folder", FOLDER_NAME);

      for (const file of files) {
        formData.append("file", file);

        const response = await axios.post(api, formData, {
          headers: {
            "content-Type": "multipart/form-data",
          },
        });
        url.push(response.data.secure_url);
        console.log(url);
      }
      return url;
    }
  };

  return (
    <form action="" id="form-add">
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
                    <label
                      htmlFor="upload-img-profile"
                      className={styles.uploadLabel}
                    >
                      {hasUploadedProfile ? (
                        <>
                          <img src="Images/Upload-solid.svg" alt="icon_arrow" />
                          <span>{uploadedImageNameProfile}</span>
                        </>
                      ) : (
                        <>
                          <img src="Images/Upload-solid.svg" alt="icon_arrow" />
                          <div className={styles.Decription}>Upload image</div>
                        </>
                      )}
                    </label>
                    <input
                      type="file"
                      id="upload-img-profile"
                      multiple
                      className={styles.hiddenInput}
                      onChange={handleImageUploadProfile}
                    />
                  </div>

                  <div className={styles.CardInput}>
                    <input type="text" />
                  </div>

                  <div className={styles.CardInput}>
                    <textarea></textarea>
                  </div>

                  <div
                    className={`${styles.ContentAvatar} ${styles.ContentImg}`}
                  >
                    <label
                      htmlFor="upload-img-content"
                      className={styles.uploadLabel}
                    >
                      {hasUploadedContent ? (
                        <>
                          <img src="Images/Upload-solid.svg" alt="icon_arrow" />
                          <span>{uploadedImageNameContent}</span>
                        </>
                      ) : (
                        <>
                          <img src="Images/Upload-solid.svg" alt="icon_arrow" />
                          <div className={styles.Decription}>Upload image</div>
                        </>
                      )}
                    </label>
                    <input
                      type="file"
                      id="upload-img-content"
                      multiple
                      className={styles.hiddenInput}
                      onChange={handleImageUploadContent}
                    />
                  </div>

                  <div
                    className={`${styles.ContentAvatar} ${styles.ContentImg}`}
                  ></div>
                </div>
              </div>
            </div>

            <div className={styles.Btn}>
              <div className={styles.SaveBtn}>
                <button type="submit">Save</button>
              </div>
              <div className={styles.CancelBtn} onClick={closeModal}>
                Cancel
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Index;
