import React from "react";
import { Link } from "react-router-dom";

function CardPublic({ id, image, name, status, species, gender, location }) {
  return (
    <>
      <div id={id} className="cardOfCharacter">
        <Link to={`character/${id}`}><img src={image} alt="character"/></Link>
        <h2>
          {name} ({status})
        </h2>
      </div>
    </>
  );
}

export default CardPublic;
