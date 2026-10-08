

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
    <div
      style={{
       backgroundColor: "#FAF0FC",
        border: "2px solid #5613d3",
        width: "300px",
        marginLeft: "auto",
        marginTop: "10px",
        padding: "10px",
        textAlign: "center"
      }}
    >
      <p
        style={{
          fontSize: "2.2em",
          color: "#3b023f",
          fontWeight: "bold",
          margin: "0 0 10px 0",
          border: "none"
        }}
      >
        Motivation
      </p>

      <button
        style={{
          backgroundColor: "antiquewhite"
        }}
        onClick={showAlert}
      >
        לחצי לקבלת מוטיבציה
      </button>
    </div>
  );
}

export default Motivation;