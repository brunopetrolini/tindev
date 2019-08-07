import React from "react";

import logo from "../assets/logo.svg";
import like from "../assets/like.svg";
import dislike from "../assets/dislike.svg";

export default function Main({ match }) {
  return (
    <div className="main-container">
      <img src={logo} alt="Tindev" />
      <ul>
        <li>
          <img
            src="https://avatars2.githubusercontent.com/u/33845665?v=4"
            alt="#"
          />
          <footer>
            <strong>Bruno Petrolini</strong>
            <p>
              Desenvolvedor autodidata, analista de sistemas, entusiasta da
              tecnologia, viciado em café.
            </p>
          </footer>

          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="dislike" />
            </button>
            <button type="button">
              <img src={like} alt="like" />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}
