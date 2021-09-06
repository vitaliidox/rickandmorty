import React from 'react';
import { useState, useEffect } from 'react';
import Card from './Card';
import './Style.css'

function GetApi() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [state, setState] = useState();
  const [pageNumber, setPageNumber] = useState(1)

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
        },
      );
    //add all dependecies
  }, [], setIsLoaded, setState, setPageNumber); 

  //remove else if an else
  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    //move to component Loader
    return <div>Загрузка...</div>;
  } else {
    return (
      <>
        {state.results.map((elem) => {
          const { id, image, name, status, species, gender, location} = elem;
          return (
            <>
              <Card {...elem}/>
            </>
          );
        })}
        {/* <FindCharacter props={state.results[0].name} /> */}
      </>
    );
  }
}

export default GetApi;
