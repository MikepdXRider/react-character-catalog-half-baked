import { Link } from 'react-router-dom';
import styles from './Characters.css';

export default function Characters({ characters }) {
  return (
    <ul aria-label="characters" className={styles.list}>
      {characters.map((character) => (
        <li key={character.name} className={styles.item}>
          <Link to={`/characters/${character.id}`}>
            <figure>
              <img
                src={character.image}
                alt={character.name}
                className={styles.image}
              />
              <figcaption className={styles.linkText}>
                {character.name}
              </figcaption>
            </figure>
          </Link>
        </li>
      ))}
    </ul>
  );
}
