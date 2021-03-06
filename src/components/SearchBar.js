import React, {useState} from "react";
import CardPublic from "./CardPublic";


function SearchBar({ newName }) {
  const [data, setData] = useState();
  const [value, setValue] = useState("");

  

  function getCharacter(name) {
    fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }

  return (
    <>
      <div class="container">
        <div class="row justify-content-center mb-4">
          <div class="input-group input-group-lg col-7">
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              id="searchName"
              type="text"
              class="form-control m-0"
              placeholder="Type name of character"
              aria-label="Username"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>

          <button
            type="button"
            class="btn btn-danger h3 ml-2"
            onClick={() => {
              value && getCharacter(value);
              setValue("");
            }}
            value="Search">
            Search
          </button>

          <button
            type="button"
            class="btn btn-danger h3 ml-2"
            onClick={() => {
              window.location = `/`;
            }}
            id="back"
            value="Back">
            Back
          </button>
        </div>
      </div>
      <div>{data && data.results.map((elem) => <CardPublic {...elem} />)}</div>
    </>
  );
}

export default SearchBar;
