import React, { useState } from 'react';

const GridCell = () => {
  const [grid, setGrid] = useState(Array(5).fill(Array(5).fill('')));

  const handleCellClick = (rowIndex, colIndex) => {
    // Do something when a cell is clicked
    // For example, you can highlight the clicked cell
    console.log(`Cell at row ${rowIndex}, column ${colIndex} clicked.`);
  };

  const handleInputChange = (event, rowIndex, colIndex) => {
    // Update the value of the cell when the input changes
    const newGrid = [...grid];
    newGrid[rowIndex][colIndex] = event.target.value;
    setGrid(newGrid);
  };

  return (
    <div>
      <h2>Grid</h2>
      <table>
        <tbody>
          {grid.map((row, rowIndex) => (
            <tr key={rowIndex} className='bg-red-500'>
              {row.map((cell, colIndex) => (
                <td key={colIndex} onClick={() => handleCellClick(rowIndex, colIndex)}>
                  <input
                    type="text"
                    maxLength={1}
                    value={grid[rowIndex][colIndex]}
                    onChange={(event) => handleInputChange(event, rowIndex, colIndex)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GridCell;
