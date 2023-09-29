import React from "react";
import style from "./Summary.module.css";

const Summary = (props) => {
  const { grades } = props;

  return (
    <div className={style.summaryContainer}>
      <h1>Summary</h1>
      {grades &&
        grades.map((grade) => (
          <div
            className={style.gradesContainer}
            key={grade.category}
            style={{ backgroundColor: grade.backgroundColor }}
          >
            <div className={style.categoryContainer}>
              <img src={grade.icon} alt={grade.icon} />
              <h1 style={{ color: grade.color }}>{grade.category}</h1>
            </div>
            <h2>
              <span>{grade.score}</span>/100
            </h2>
          </div>
        ))}
      <button>continue</button>
    </div>
  );
};

export default Summary;
