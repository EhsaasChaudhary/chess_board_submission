import React from 'react';
import { useSelector } from 'react-redux';
import Square from './Square';
import { RootState } from '../redux/Store';

const Board: React.FC = () => {
  const board = useSelector((state: RootState) => state.board.squares);

  return (
    <div>
      {board.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: 'flex' }}>
          {row.map((square, colIndex) => (
            <Square
              key={`${rowIndex}-${colIndex}`}
              row={rowIndex}
              col={colIndex}
              color={square.color}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
