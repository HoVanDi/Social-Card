// import React from "react";
import styles from "./style.module.css";
import React, { useEffect, useState } from "react";

const Index = ({ setShowContainer }) => {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent user from entering newline in textarea
      handlePostClick();
    }
  };

  useEffect(() => {
    setShowContainer(false); // Hide Container in CardDetail page
    return () => {
      setShowContainer(true); // Reset when leaving CardDetail page
    };
  }, [setShowContainer]);

  useEffect(() => {
    const existingComments = JSON.parse(
      localStorage.getItem("comments") || "[]"
    );
    setMessageCount(existingComments.length);
  }, []);

  // const [comment, setComment] = useState("");
  const [commentError, setCommentError] = useState(false);

  const [inputComment, setInputComment] = useState(""); // New variable to save comment content in input box
  const handleCommentChange = (event) => {
    const value = event.target.value;
    setInputComment(value); // Use the variable newComment
    setCommentError(value === "");
  };

  const handlePostClick = () => {
    if (!commentError && inputComment !== "") {
      setIsCommentPosted(true);

      // Save comments to local storage
      const currentDate = new Date();
      const formattedDate = `${currentDate.getDate()}/${
        currentDate.getMonth() + 1
      }/${currentDate.getFullYear()}`;
      const newComment = {
        dayCreate: formattedDate,
        content: inputComment,
      };

      // Get the list of comments from local storage (if any)
      const existingComments = JSON.parse(
        localStorage.getItem("comments") || "[]"
      );

      // Add a new comment to the list
      existingComments.push(newComment);

      // Save the comment list to local storage
      localStorage.setItem("comments", JSON.stringify(existingComments));

      // Update the number of comments and perform other processing when the post is successful
      setMessageCount(existingComments.length);
      setCommentError(false);
      setInputComment("");
    } else {
      setIsCommentPosted(false);
      setCommentError(true);
    }
  };

  const [heartCount, setHeartCount] = useState(
    parseInt(localStorage.getItem("heartCount")) || 0
  );
  const [messageCount, setMessageCount] = useState();
  const [isCommentPosted, setIsCommentPosted] = useState(false);

  useEffect(() => {  //listen for the change of heartCount and save the value to local storage
    localStorage.setItem("heartCount", heartCount);
  }, [heartCount]);

  return (
    <div className={styles.Container}>
      <div className={styles.Header}>SOCIAL CARD DETAIL</div>
      <div className={styles.ProfileDetail}>
        <img
          src='Images/Varen-profile.svg'
          alt=''
        />
        <div>
          <div className={styles.ProfileName}>Binance</div>
          <div className={styles.DayCreate}>22/04/2021 (day create)</div>
        </div>
      </div>
      <div className={styles.Content}>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more- or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </div>

      <img
        className={styles.ContentImg}
        src='Images/Content-img.png'
        alt=''
      />

      <div className={styles.Icon}>
        <div
          className={styles.IconHeart}
          onClick={() => setHeartCount((prevCount) => prevCount + 1)}
        >
          <img
            src='Images/Heart-solid.svg'
            alt=''
          />
          {heartCount}
        </div>

        <div
          className={styles.IconMessage}
          onClick={() => isCommentPosted && setMessageCount(messageCount + 1)}
        >
          <img
            src='Images/Message-solid.svg'
            alt=''
          />
          {messageCount}
        </div>
      </div>

      <div>
        {localStorage.getItem("comments") &&
          JSON.parse(localStorage.getItem("comments"))
            .reverse()
            .map((comment, index) => (
              <div
                className={`${styles.Comment} ${styles.ContentComment}`}
                key={index}
              >
                <div className={styles.DayCreate}>
                  {comment.dayCreate} (day create)
                </div>
                <div className={styles.Content}>{comment.content}</div>
              </div>
            ))}

        {/* <div className={styles.ContentComment}>
          <div className={styles.DayComment}>22/04/2021 (day create)</div>
          <div className={styles.MessageComment}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more- or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </div>
        </div> */}
      </div>

      <div className={styles.PostComment}>
        <div className={styles.TextPost}>Post a new coment</div>
        <textarea
          onKeyDown={handleKeyPress}
          value={inputComment}
          onChange={handleCommentChange}
          className={`${styles.CommentTextarea} ${
            commentError ? styles.errorPost : ""
          }`}
          type='text'
          placeholder=' Add comment...'
        />

        <button
          className={styles.BtnPost}
          type='submit'
          onClick={handlePostClick}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default Index;
