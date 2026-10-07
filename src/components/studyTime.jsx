import React, { useState } from "react";
import styles from "./StudyTime.module.css";

function StudyTime() {

  return (
    <>
      <div className={styles.StudyTime}>
        <p className={styles.header}>Study Start Time</p>
        <p>{new Date().toLocaleTimeString()}</p>
        <p>{new Date().toLocaleDateString()}</p>
      </div>
    </>
  );
}

export default StudyTime;
