import React from "react";
import { useDispatch } from "react-redux";
import { toggleSquareColor } from "../redux/boardSlice";
import { AppDispatch } from "../redux/Store";

interface SquareProps {
  row: number;
  col: number;
  color: "white" | "black" | "yellow" | "red";
}

const Square: React.FC<SquareProps> = ({ row, col, color }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = () => {
    dispatch(toggleSquareColor({ row, col }));
  };

  return (
    <div
      onClick={handleClick}
      style={{
        width: "50px",
        height: "50px",
        backgroundColor: color,
        display: "inline-block",
        border: "1px solid #000",
      }}
    ></div>
  );
};

export default Square;
