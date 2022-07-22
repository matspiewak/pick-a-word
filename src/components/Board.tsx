import styles from "@/styles/Home.module.css";
import React, { useState } from "react";
import { BoardCell } from "./BoardCell";

const numRows = 15
const numCols = 15

export default function Board() {
  const [grid,setGrid] = useState(() => {
    const rows = []
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => ' '))
    }

    return rows
  })

  return (
    <div className={styles.Board}>
    {grid.map((rows,i) => rows.map((col, k) => (
      <BoardCell key={i*15+k} value={i*15+k}/>
    )))}
    </div>
  );
}
