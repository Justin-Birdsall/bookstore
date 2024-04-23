import React from "react";
import "./App.css";
import { TicTacToe } from "./components/tic-tac-toe.tsx";


function Game() {
	return (
    <div className='App'>
			<header className='App-header'>
        <h1>Final For Structure</h1>
			</header>
			<main>
				<TicTacToe />
			</main>
		</div>
	);
}

export default Game;