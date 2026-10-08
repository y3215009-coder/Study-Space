import React, { useState, useEffect} from "react";
import styles from "./StudyTime.module.css";

function StudyTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
        return () => clearInterval(timer);
  }, []);
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
