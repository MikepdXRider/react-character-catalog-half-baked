export default function Character({ character }) {
  return (
    <figure>
      <img src={character.image} alt={character.name} />
      <figcaption>
        <h3>{character.name}</h3>
        <p>{character.species}</p>
        <p>Status: {character.status}</p>
      </figcaption>
    </figure>
  );
}
