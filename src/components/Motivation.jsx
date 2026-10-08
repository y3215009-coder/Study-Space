import styles from "./Motivation.module.css";

function Motivation() {
  const quotes = [
    "הצלחה היא סך הכל מעשים קטנים שנעשים יום אחר יום",
    "הדרך הטובה ביותר לחזות את העתיד היא ליצור אותו",
    "אני אף פעם לא מפסיד או שאני מנצח או שאני לומד",
    "אל תפחד לטעות, תפחד לא לנסות.",
    "זכרי ! קשה יש רק בלחם וגם אותו אוכלים"
  ];

  const showAlert = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    alert(quotes[randomIndex]);
  };

  return (
    <div className={styles.studyMotivation}>
      <p className={styles.header}>Motivation</p>
      <button className={styles.buttonMotivation} onClick={showAlert}>לחצי לקבלת מוטיבציה</button>
    </div>
  );
}

export default Motivation;