import React from "react";
import { useState, useEffect } from "react";
import CardPublic from "./CardPublic";
import "./Style.css";

import Pagination from "./Pagination";

function GetApi() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [state, setState] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setState(result);
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [pageNumber]);

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <>
        <div>
          {state.results.map((elem) => {
            return (
              <>
                <div id="blockCards">
                  <CardPublic {...elem} />
                </div>
              </>
            );
          })}
        </div>
        <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
      </>
    );
  }
}

export default GetApi;
