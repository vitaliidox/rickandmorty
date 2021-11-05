import React, {useState, useContext} from "react";
import CardPublic from "./CardPublic";
import { Link } from "react-router-dom";
import { NameContext } from "../App";



function SearchBar({newName}) {

  const name = useContext(NameContext)
  const [data, setData] = useState();

 
  
  function getCharacter() {
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

          <div class="input-group input-group-lg col-4">
            <input
                onChange={(e)=>newName(e.target.value)}
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
                  if (document.getElementById("searchName").value  !== "") {
                    window.location=`/search/:${name}`
                  }else {document.getElementById("searchName").value = "";
                  newName("");
                  window.location=`/`}            
                }}
              value="Search"
            >Search 
          </button>

          <button
              type="button"
              class="btn btn-danger h3 ml-2"
                onClick={() => {
                  window.location=`/`
                  if (document.getElementById("searchName").value) {
                    document.getElementById("searchName").value = "";
                    newName("");
                  }}}
              id="back"
              value="Back"
            >Back
          </button>

        </div>
      </div>
      <div>{data && data.results.map((elem) => <CardPublic{...elem} />)}</div>
    </>
  );
}

export default SearchBar;
