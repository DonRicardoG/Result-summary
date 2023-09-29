import React, { useState, useEffect } from "react";
import style from "./Main.module.css";
import Summary from "../Summary/Summary";
import Result from "../Result/Result";
import axios from "axios";

const Main = () => {
  const [grades, setGrades] = useState("");
  const [scores, setScores] = useState([]);
  const [textGrade, setTextGrade] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/data.json");
        const data = response.data;
        const array = [];
        setGrades(data);
        data.map((item) => array.push(item.score));
        setScores(
          Math.floor(
            array.reduce((total, score) => total + score, 0) / array.length
          )
        );
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className={style.mainContainer}>
      <Result scores={scores} textGrade={textGrade} />
      <Summary grades={grades} />
    </div>
  );
};

export default Main;
