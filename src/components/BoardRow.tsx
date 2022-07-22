import styles from "@/styles/Home.module.css";
import { BoardCell } from "./BoardCell";
import { useState } from "react";

//? zmienić obiekt state na wartość [rowId]:words?
export const BoardRow: React.FC<{}> = () => {
  const [text, setText] = useState("");
  let n = ''
  const handleTextUpdate = (e:any) => {
    setText(n += e.target.value)
  };
  let words = text.split(' ')
  console.log(words);

  const horizontalAxis = [1, 2, 3, 4, 5];
  const cells = [];
  for (const h of horizontalAxis) {
    cells.push(<BoardCell value={text} handleTextUpdate={handleTextUpdate} />);
  }
  return <tr>{cells}</tr>;
};
