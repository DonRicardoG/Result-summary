import React, { useState } from "react";
import style from "./Result.module.css";

const Result = (props) => {
  const { scores, textGrade } = props;

  return (
    <div className={style.resultContainer}>
      <h1>your result</h1>
      <div className={style.circleScore}>
        {scores && <h1>{scores}</h1>}
        <h3>of 100</h3>
      </div>
      <h1>Great!</h1>
      <p>
        Your score is higher than 65% of the people who have taken this test.
      </p>
    </div>
  );
};

export default Result;
