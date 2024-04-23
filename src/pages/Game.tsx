import React from "react";

import { TicTacToe } from "../components/tic-tac-toe";
import { Link } from "react-router-dom";
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
const handleClick = (ref) => {
  ref.current.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
};

function Game() {
	return (<>
			<Navbar>
				<div className="text-sm breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a>Tic-Tac-Toe</a>
          </li>
        </ul>
      </div>
			</Navbar>
			<main className="content-container bg-neutral" >
				<TicTacToe />
			</main>
			<Footer></Footer>
	</>
	);
}

export default Game;