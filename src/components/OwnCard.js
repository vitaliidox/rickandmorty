import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function OwnCard() {
  const [data, setData] = useState();
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  if (data) {
    const { image, name, status, species, gender, location } = data;
    return (
      <>
        <div id="OwnCard">
          <img className="imgOwnCards" src={image} alt="character" />
          <div className="ownInfo">
            <h2>
              {name} ({status})
            </h2>
            <p>Species: {species}</p>
            <p>Gender: {gender}</p>
            <p>Location: {location.name}</p>
          </div>
          <Link to="/">
            <button type="button" class="btn btn-danger h3 ml-3">
              Back
            </button>
          </Link>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h1>Not found!</h1>
      </>
    );
  }
}
export default OwnCard;
