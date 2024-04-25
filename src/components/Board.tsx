
import React, { useState } from "react";
type BoardProps = {

	board: Array<Array<string | null>>;
	handleClick: (row: number, col: number) => void;
  };
  
  export const Board = ({ board, handleClick }: BoardProps) => {
	return (
		
	<div className="main">
	  <div className='board bg-primary'>
		{board.map((row, rowIndex) => (
		  <div key={rowIndex} className='board_row'>
			{row.map((cell, cellIndex) => (
			  <button 
				key={cellIndex}
				className={`btn ${cell ? `bg_${cell.toLowerCase()}-primary` : ""} `}
				onClick={() => handleClick(rowIndex, cellIndex)}
			  >
				{cell}
			  </button>
			))}
		  </div>
		))}
	  </div>
	  </div>
	);
  };
  