import React, { useState } from "react";
import styles from "./StudyCheckList.module.css";

function StudyCheckList() {
  const taskLIst = [
    "לסיים שיעורי בית",
    "להשלים קורס",
    "להעלות קבצים",
    "להגיש פרויקט",
    "ללמוד למבחן",
  ];

  return (
    <>
      <div className={styles.studyCheckList}>
        <p className = {styles.header}>Study CheckList</p>
        <ul>
          {taskLIst.map((item, index) => (
            <li key={index}>
              <label for="lname">{item}</label>
              <input type="checkbox" id="lname" name="lname" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default StudyCheckList;
