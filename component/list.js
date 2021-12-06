import React from "react";
import "./list.css";

const Movies = ({ handleClick, id, title, category, likes, dislikes }) => {
    return (
        <figure className="movie-container">
            <div className="oui">
                <img
                    className="movie-img"
                    href=""
                    src="https://fr.web.img6.acsta.net/c_310_420/pictures/21/10/19/17/59/4466537.jpg"
                ></img>

            </div>
            <div className="description">
                <div>
                    <h1 className="movie-title">{title}</h1>
                    <p>{category}</p>
                </div>
                <div>
                    <p className="movie-p-like">like: {likes}</p>
                    <p>dislike : {dislikes}</p>
                </div>
            </div>
            <div className="div-movie-button-delete">
                <button className="movie-button-delete" onClick={() => handleClick(id)}>
                    X
                </button>
            </div>
        </figure>
    );
};

export default list;
