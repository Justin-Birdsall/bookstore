
import React, { useState } from "react";
type BoardProps = {

	board: Array<Array<string | null>>;
	handleClick: (row: number, col: number) => void;
  };
  
  export const Board = ({ board, handleClick }: BoardProps) => {
	return (
		
	<div className="main ">
	  <div className='board bg-primary flex justify-center space-x-1'>
		{board.map((row, rowIndex) => (
		  <div key={rowIndex} className='board_row grid row-span-3 col-span-3 gap-x-4 gap-y-1 '>
			{row.map((cell, cellIndex) => (
			  <button 
				key={cellIndex}
				className={`btn w-40 h-40 grid ${cell ? `bg_${cell.toLowerCase()}-primary` : ""} `}
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
  