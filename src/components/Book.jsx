import React from "react";
import { Link } from "react-router-dom";

const library = ({ image, title, author, category, subtitle }) => {
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
        <p>{author}</p>
        <p className="text-lg font-medium">{subtitle}</p>
        <div className="card-actions">
          <Link to="/book-details" className="btn btn-primary" data-theme= "nord">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default library;
