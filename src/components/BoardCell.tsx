import styles from "@/styles/Home.module.css";
import { useState } from "react";

export const BoardCell: React.FC<{ value: number }> = ({ value }) => {
  const selectRow: (rowNumber: number) => boolean = (
    rowNumber: number
  ): boolean => {
    if (value % 15 === rowNumber) return true;
    return false;
  };

  return <div className={`${styles.Cell} ${selectRow(0) ? styles.highlight : ''}`}>{value}</div>;
};
