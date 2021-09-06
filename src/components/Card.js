import React, { createElement } from "react";
import CharactersOwnCard from "./CharactersOwnCard";

function Card({ id, image, name, status, species, gender, location }) {
  return (
    <>
      <div id={id} className="cardOfCharacter">
        <a href={id} onClick={()=>{
          createElement(<div><CharactersOwnCard/></div>)
        }}>
          <img src={image} alt="character" />
        </a>
        <h2>
          {name} ({status})
        </h2>
      </div>
    </>
  );
}

export default Card;
