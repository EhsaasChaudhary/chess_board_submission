import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the type for a single square
interface Square {
  color: "white" | "black" | "yellow" | "red";
}

// Define the type for the board
type BoardState = Square[][];

// Initialize an 8x8 chessboard
const initialState: BoardState = Array(8)
  .fill(null)
  .map((_, row) =>
    Array(8)
      .fill(null)
      .map((_, col) => ({
        color: (row + col) % 2 === 0 ? "white" : "black",
      }))
  );

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    toggleSquareColor: (
      state,
      action: PayloadAction<{ row: number; col: number }>
    ) => {
      const { row, col } = action.payload;
      const square = state[row][col];
      if (square.color === "white") {
        square.color = "yellow";
      } else if (square.color === "black") {
        square.color = "red";
      }
    },
  },
});

export const { toggleSquareColor } = boardSlice.actions;
export default boardSlice.reducer;
