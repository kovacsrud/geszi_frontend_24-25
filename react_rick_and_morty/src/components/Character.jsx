function Character({character}) {
  return (
    <div className="card card-side bg-sky-200 shadow-xl m-5">
      <figure>
        <img
          src={character.image}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{character.name}</h2>
        <p>Status: {character.status}</p>
        <p>Speci: {character.species}</p>
        <p>Gender: {character.gender}</p>
        <p>Origin: {character.origin.name}</p>
        <div className="card-actions justify-end">
          
        </div>
      </div>
    </div>
  );
}

export default Character;
