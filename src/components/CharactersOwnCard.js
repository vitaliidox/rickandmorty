function CharactersOwnCard({ id, image, name, status, species, gender, location }) {
  return (
    <>
      <div id="OwnCard">
        <img className="imgOwnCards" src={image} alt="character" />
        <h2>
          {name} ({status})
        </h2>
        <p>Species: {species}</p>
        <p>Gender: {gender}</p>
        <p>Location: {location.name}</p>
      </div>
    </>
  );
}
export default CharactersOwnCard;
