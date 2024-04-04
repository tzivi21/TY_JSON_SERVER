import React from 'react'
import styles from '../css/Info.module.css'

function Info({ currentUser, setIsShowInfo }) {

  return (
    <div className={styles.back}>
      <div className={styles.infoWrapper}>
        <button className={styles.xButton} onClick={() => setIsShowInfo(prev => !prev)}>❌</button>
        <ul>
          <li><b>Id: </b>{currentUser.id}</li>
          <li><b>Name: </b>{currentUser.name}</li>
          <li><b>Username: </b>{currentUser.username}</li>
          <li><b>Email: </b>{currentUser.email}</li>
          <li><b>City: </b>{currentUser.city}</li>
          <li><b>Phone: </b>{currentUser.phone}</li>
        </ul>
      </div>
    </div>
  )
}

export default Info