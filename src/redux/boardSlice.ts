import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SquareState {
  color: string;
}

export interface BoardState {
  squares: SquareState[][];
  selectedSquare: { row: number; col: number } | null; // Tracks the selected square
}

// Initial state
const initialState: BoardState = {
  squares: Array(8).fill(null).map((_, row) =>
    Array(8).fill(null).map((_, col) => ({
      color: (row + col) % 2 === 0 ? 'white' : 'black',
    }))
  ),
  selectedSquare: null,
};

// Slice
const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    toggleSquareColor: (state, action: PayloadAction<{ row: number; col: number }>) => {
      const { row, col } = action.payload;

      // Reset all squares to default colors
      state.squares = state.squares.map((rowArr, rowIndex) =>
        rowArr.map((square, colIndex) => ({
          color: (rowIndex + colIndex) % 2 === 0 ? 'white' : 'black',
        }))
      );

      // Update the selected square
      state.selectedSquare = { row, col };

      // Change the color of the clicked square
      const clickedSquare = state.squares[row][col];
      clickedSquare.color = clickedSquare.color === 'white' ? 'yellow' : 'red';
    },
  },
});

export const { toggleSquareColor } = boardSlice.actions;
export const boardReducer = boardSlice.reducer;
