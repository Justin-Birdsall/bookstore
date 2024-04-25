import React from "react";
import { Link } from "react-router-dom";

const library = ({ image, title, author, category, subtitle }) => {
  let bookDetailLink = "";
  if (author === "book-details") {
    bookDetailLink = "/book-details";
  } else if (author === "Game") {
    bookDetailLink = "/Game";
  }
    else if (author === "rat") {
    bookDetailLink = "/ratgame";
  }
   else if (author === "dnd") {
    bookDetailLink = "/dndmini";
  }
  return (
    <div className="card  shadow-xl  bg-neutral">
      <figure className="px-10 pt-10">
        <img src={image} alt={title} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-white">
          {title}{" "}
          <div className="badge badge-secondary text-xs"data-theme = "dim">{category}</div>
        </h2>
    
        <p className="text-lg font-medium">{subtitle}</p>
        <div className="card-actions">
          <Link to={bookDetailLink}className="btn btn-primary" >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};
export default library;
