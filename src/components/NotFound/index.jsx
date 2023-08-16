import React from 'react'
import styles from "./style.module.css"

const index = () => {
  return (
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


  )
}

export default index
