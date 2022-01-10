import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Character from '../../components/Characters/Character';
import { getCharacter } from '../../services/rickAndMortyApi';

export default function CharacterDetail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    getCharacter(id)
      .then(setCharacter)
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <>
      <Link to="/characters">Back to Characters</Link>
      <article>
        {loading ? (
          <h1>Loading character...</h1>
        ) : (
          <Character character={character} />
        )}
      </article>
    </>
  );
}
